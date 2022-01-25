const axios = require("axios");
const cheerio = require("cheerio");

const API_ENDPOINT =
  "https://www.trustedhousesitters.com/house-and-pet-sitters/united-kingdom/england/london/l/1687461/";
async function fetchPage(url) {
  const response = await axios(url, { responseType: "document" });
  console.log(response);
  return response.data;
}

function getScriptTagContaining(html, searchText) {
  const $ = cheerio.load(html);
  const scripts = $("script").filter(function (i, el) {
    return $(this).html().includes(searchText);
  });
  return scripts.html();
}

function getStatementBefore(stmts, searchText) {
  const textBefore = stmts.slice(0, stmts.search(searchText)).trim();
  return textBefore.substring(0, textBefore.length - 1);
}

exports.handler = async (event, context) => {
  try {
    const body = await fetchPage(API_ENDPOINT);
    const scriptText = getScriptTagContaining(body, "window.__INITIAL_STATE__");

    const statement = getStatementBefore(
      scriptText,
      "window.__INITIAL_I18N_STORE__"
    );

    const scriptTextTrimmed = statement
      // .replace("window.__INITIAL_STATE__ =", "")
      // .trim()
      // .replace(/undefined/g, "null")
      .replace(/(\b)cat(\b)/g, "raccoon")
      .replace(/(\b)Helene(\b)/g, "R.")
      .replace(/(\b)Hélène(\b)/g, "R.")
      .replace(/(\b)Hèléne(\b)/g, "R.")
      .replace(/(\b)cats(\b)/g, "raccoons")
      .replace(/(\b)house(\b)/g, "den");

    const parsedJSON = JSON.parse(scriptTextTrimmed);

    const parsedAssignements =
      parsedJSON.search.profile["1687461"].pastAssignments;
    //get value of Assignment statement  line 35

    let reviews = parsedAssignements
      .filter(
        (element, index) =>
          element !== null &&
          element.review !== null &&
          element.review.description !== undefined
      )

      .map((assignement) => {
        return {
          review: assignement.review,
          description: assignement.review.description,
          ownerName: assignement.ownerName,
          photo: assignement.ownerAvatarPhoto,
          location: assignement.listingLocation.name,
          country: assignement.listingLocation.countryName,
          startDate: assignement.startDate,
          endDate: assignement.endDate,
          //assignement.admin1Name
        };
      });

    // .map((assignement) => review);

    return { statusCode: 200, body: JSON.stringify(reviews) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data etc.." }),
    };
  }
};
