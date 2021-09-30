/**
 * Web Atelier 2021 2 - JavaScript
 *
 * Student: __STUDENT NAME__
 *
 */

//--------------------------------------------------------------------------------------
// Task 1
//--------------------------------------------------------------------------------------

 /**
 * @param {number} s - A time as the number of seconds.
 * @return {string} A string which represents the number of minutes followed by the remaining seconds
 *  with the M:SS format. If the input value is negative, the resulting string should be in -M:SS format.
 * SS indicates that if the number of seconds is less than 10, it should be padded with a 0 character.
 */
function format_seconds(s) {
}


//They should be able to write this function on the fly


 /**
 * @param {number[]} a - The array of numbers.
 * @param {number} c - The scalar multiplier.
 * @return {number[]} An array computed by multiplying each element of the input array `a`
 * with the input scalar value `c`.
 */
function scalar_product(a, c) {
}


/**
 * @param {number[]} a - The first array of numbers.
 * @param {number[]} b - The second array of numbers.
 * @return {number} A value computed by summing the products of each pair
 * of elements of its input arrays `a`, `b` in the same position.
 */
function inner_product(a, b) {
}


/**
 * @param {array} a - The array.
 * @param {function} mapfn - The function for the map step.
 * @param {function} [reducefn= function(x,y) { return x+y; }] - The
 * function for the reduce step.
 * @param {string} [seed=""] - The accumulator for the reduce step.
 * @return {*} The reduced value after the map and reduce steps.
 */
function mapReduce(a, f, combine, seed) {
}




/**
* @param {integer} x - The first integer.
* @param {integer} y - The second integer.
* @param {integer} [step=1] - The value to add at each step.
* @return {integer[]} An array containing numbers x, x+step, … last, where:
*    - last equals x + n*step for some n,
*    - last <= y < last + step if step > 0 and
*    - last + step < y <= last if step < 0.
*/
function range(x, y, step) {
}




/**
 * @param {number[]} a - The first array of numbers.
 * @param {number[]} b - The second array of numbers.
 * @return {number[]} An array with the elements found both in `a` and `b`.
 */
function array_intersect(a, b) {
}


/**
 * @param {number[]} a - The first array of numbers.
 * @param {number[]} b - The second array of numbers.
 * @return {number[]} An array with the elements found in `a` but not in `b`.
 */
function array_difference(a, b) {
}


//--------------------------------------------------------------------------------------
// Task 2
//--------------------------------------------------------------------------------------

/**
 * @param {number[]} a - The array over which to iterate.
 * @return {function} - call this function to retrieve the next element of the array. The function throws an error if called again after it reaches the last element.
 */
function iterator(a) {
}


//--------------------------------------------------------------------------------------
// Task 3
//--------------------------------------------------------------------------------------

function init_player(dom_audio, song_urls, volume)
{
}


//--------------------------------------------------------------------------------------
// Task 4
//--------------------------------------------------------------------------------------

function mini_md(text)
{
}