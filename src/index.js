import "./styles.scss";
import "regenerator-runtime/runtime";
import { randomQuote } from "/quote.js";
import { place } from "/location.js";
import { locTime } from "/time.js";

//functions have all been moved to individual files for a more maintainable app. #welovespaghetticode
//This was a parcel test, it passed.

//invoke the functions

//creates quote at top of page
randomQuote();
//generates time based on users IP address
locTime();
//Finds location based on users IP address
place();
