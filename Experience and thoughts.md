## Experience and thoughts

![](https://cdn-std.droplr.net/files/acc_601720/b9GUqo)

#### Organizing things

Keeping track of things gets harder as more thoughts and ideas came. It became increasingly hard to keep track of jumping thoughts of what would like to do, fun things to try and see them fail, experiments to verify if things works out. 

So far so good. Issues works, too lazy to put down clearly defined user stories, simple items that I could understand even after a long while is good enough.



### On the model stuff

Done with class based models mirroring table properties and trying to make a mongo db style model for myself, and serialize/desterilize json into objects, at least for the javascript stack. 

Though it was really really fun and rather simple to work with, but nevertheless totally redundant.

#### What went well

The query builder started from last week was completed and i'm really glad that I could reuse this thing in every project where raw sql queries is concerned. I mean, yes there are already tons of elegant sophisticated js query builders out there that are bug free this thing is nothing of that sort, but the point is, 1. it was fun 2. it was super light weight 3. I can change anything i want and do anything i want with it 4. i understand this thing from inside out and don't without having to read thousands of lines of other people's source code.

```javascript
//todo: use quote
const makePlaceHolders = (vals, initial = 0) =>
  vals.map((v, i) => `\$${i + initial + 1}`)

// @param: string | array
const quote = params=> Array.isArray(params)
  ?params.map(param=>`$"{param}"`):
  `"${params}"`

const parseParam = param => Array.isArray(param) ? param.join() : param

const parseWhereClause = ((fields, vals, startIdx = 0) => {
  const placeHolders = makePlaceHolders(vals, startIdx)
  let res = ''
  for (let i = 0; i < fields.length; i++) {
    res += fields[i] + '=' + `${placeHolders[i]}`
    if (i < fields.length - 1) {res += ' and '}
  }
  return res
})

// @param columns {Array} [id, name]
// @param values {Array} ['dfd','dfd','dfd']
const prepareInsertStmt = (tableName, columns, values) => {
  let stmt = `insert into ${quote(tableName)} (${parseParam(columns)}) `
  stmt += `values (${makePlaceHolders(values)}) `
  stmt += `RETURNING id`
  return stmt
}

// @param  where {id:1}
// @returns update table (name1,name2) = ($1,S2) where column1 = $4
const prepareUpdateStmt = (tableName, columns, values, where) => {
  const whereCols = Object.keys(where)
  const whereVals = Object.keys(where)
  const wherePlaceHolderStartIdx = columns.length
  let stmt = `update ${quote(tableName)} \set (${parseParam(columns)})=`
  stmt += `(${makePlaceHolders(values)}) where `
  stmt += `${parseWhereClause(whereCols, whereVals, wherePlaceHolderStartIdx)}`
  return stmt
}

// @param where { id:1, name:'name'}
// @returns select column1, column2 column3 from table
// where column1=$1 and column2 = $2
const prepareSelectStmt = (tableName, selections, where) => {
  let stmt = `select ${parseParam(selections)} from ${quote(tableName)}`
  if (where) {
    const whereCols = Object.keys(where)
    const whereVals = Object.keys(where)
    stmt += ` where ${parseWhereClause(whereCols, whereVals)}`
  }
  return stmt
}

const prepareDeleteStmt = (tableName, where) => {
  const whereCols = Object.keys(where)
  const whereVals = Object.keys(where)
  let stmt = `delete from ${quote(tableName)} `
  stmt += `where ${parseWhereClause(whereCols, whereVals)} `
  stmt += `returning id`
  return stmt
}

module.exports = {
  prepareInsertStmt,
  prepareSelectStmt,
  prepareUpdateStmt,
  prepareDeleteStmt,
}

```

### Playing with jwt

```javascript
const registerUser = async (req, res) => {
  const { username, password } = req.body
  const user = new User(-1, username, password, '')
  user.password = await encrypt(user.password)
  try {
    const saveResult = await user.save()
    if (!saveResult) return res.redirect('/')
    user.id = saveResult.rows[0].id
    const { userData, token } = signUser(user)
    res.cookie('token', token)
    res.cookie('userData', userData)
    res.redirect('/dashboard')
  } catch (e) {
    // todo: set user exist session error
    console.error(e)
    res.redirect('/')
  }
}
```

```javascript
const {verify} = require('jsonwebtoken')

const authorize = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).redirect('/')
  }
  try {
    const decoded = verify(token, process.env.PRIVATE_KEY);
    req.userData = decoded;
    next()
  } catch (e) {
    res.status(400).redirect('/')
  }
}

module.exports = authorize

```



So i hash the password, save it, sign the user with jwt and put that into a cookie , together with the user's basic data, just enough details to make other requests throughout the site. Then there is also a middle ware that protects routes by verifying the token against secret key.  I know, i probably should just send back a json and let front end carry that token in its auth header and where is the refresh token? But the problem is i'm dealing with SSR for the first time and it is really not a good time to figure that stuff about how to put them together out for now. I mean there are tons of other main features to do work on. They were in the backlog though. 

##### The trouble

```javascript
const _nav = (props) => {
   ....
    const userData = Cookies.get('userData')
    if (!userData) {
      return preLoginMenu
    }
    const userDataObj = JSON.parse(userData.slice(2))
    return loggedInMenu(userDataObj)
  }
  const loggedInMenu = (userData)=>(
    <div className="navbar-item">
      {userData.user_name}
    </div>
  )
    const preLoginMenu = (
    <div className="navbar-item">
      <div className="buttons">
        <a className="button is-primary has-text-weight-bold"
           onClick={handleRegisterBtnClicked} id='navSignUpBtn'>
          Sign up
        </a>
        <a className="button is-light" onClick={handleLoginBtnClicked} id='navLoginBtn'>
          Log in
        </a>
      </div>
    </div>
  )

  return(
      <div className="navbar-end">
              {setloginAreaMenu()}
      </div>
  )
```

So the plan was to get that userData out from the cookie , if userData exists, display the user menu stuff,

if not, display sign up/login. And then this happened...

![](https://cdn-std.droplr.net/files/acc_601720/FVx7Sb)

So I googled as usual

![](https://cdn-std.droplr.net/files/acc_601720/AUqlKs)

Of cos this would happen, as the page gets fully rendered on client side, there is no userData cookie, so the login area contains login/sign up.  And then on the client, the javascript bundle takes over , found the cookie and renders different result. 

Now what? Do I want to with another precious day just to mess up the webpack stuff without getting any real stuff done? What else are my options?

Use a session ? That might work but ...sessions are not scalable

How about utilizing a static script ? gross...

What about simply pass that user info down into a prop? Since an authorized user should have access to that information ,the best place to do it is in the authorization middleware. That would be the natural solution.

```javascript
// authorization middleware
const {verify} = require('jsonwebtoken')

const authorize = (req, res, next) => {

  if (!req.cookies && !(req.cookies.token)) {
    // token not found
    res.status(401).redirect('/')
  }
  const token = req.cookies.token;

  try {
    res.userData = verify(token, process.env.PRIVATE_KEY);
    next()
  } catch (e) {
    res.status(400).redirect('/')
  }
}
// _nav.jsx
module.exports = authorize
  const preLoginMenu = (
    <div className="navbar-item">
      <div className="buttons">
        <a className="button is-primary has-text-weight-bold"
           onClick={handleRegisterBtnClicked} id='navSignUpBtn'>
          Sign up
        </a>
        <a className="button is-light" onClick={handleLoginBtnClicked} id='navLoginBtn'>
          Log in
        </a>
      </div>
    </div>
  )
  const loggedInMenu = (userData)=>(
    <div className="navbar-item">
      {userData.user_name}
    </div>
  )


  const setloginAreaMenu = ()=> {
    const userData = props.userData
    if (!userData) {
      return preLoginMenu
    }
    return loggedInMenu(userData)
  }
```





