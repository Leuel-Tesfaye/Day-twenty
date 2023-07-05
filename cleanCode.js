/** javascript coding conventions : are style guidelines for programming which are developed by an individual or a team
 * coding convention helps : to write clean code 
 *                           to improve code readability and reusability 
 */

/**Conventions use in 30DaysOfJavaScript
In this challenge we follow the regular JavaScript convention but I added also my preference of writing.

We used camelCase for variables and functions.
All variable names start with a letter.
We chose to use const for constants, arrays, objects and functions. In stead of double quote, we chose to use single quote or backtick. Single quote is becoming trendy.
We also removed semicolons from our code but it is a matter of personal preference.
Space around arithmetic operators, assignment operators and after comma
Arrow function instead of function declaration
Explicit return instead of implicit return if the function is one liner
No trailing comma in the last value of an object
We prefer this +=, -=, *= /=, **= instead of the longer version
When we use console.log() it is good to print with a tag string to identify from where the console is coming
 */

// function which return full name of a person
const printFullName = (firstName, lastName) => firstName + ' ' + lastName

// function which calculates a square of a number
const square = (n) => n * n

// a function which generate random hexa colors
const hexaColor = () => {
  const str = '0123456789abcdef'
  let hexa = '#'
  let index
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length)
    hexa += str[index]
  }
  return hexa
}

// a function which shows date and time
const showDateTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const date = now.getDate()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }

  const dateMonthYear = date + '.' + month + '.' + year
  const time = hours + ':' + minutes
  const fullTime = dateMonthYear + ' ' + time
  return fullTime
}