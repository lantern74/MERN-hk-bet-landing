const axios = require("axios");

// Function to send a POST request
async function postData() {
    const url = "https://info.cld.hkjc.com/graphql/base/";
    const data = {
        "query":"\n      query matchList($startIndex: Int, $endIndex: Int,$startDate: String, $endDate: String, $matchIds: [String], $tournIds: [String], $fbOddsTypes: [FBOddsType]!, $fbOddsTypesM: [FBOddsType]!, $inplayOnly: Boolean, $featuredMatchesOnly: Boolean, $frontEndIds: [String], $earlySettlementOnly: Boolean, $showAllMatch: Boolean) {\n        matches(startIndex: $startIndex,endIndex: $endIndex, startDate: $startDate, endDate: $endDate, matchIds: $matchIds, tournIds: $tournIds, fbOddsTypes: $fbOddsTypesM, inplayOnly: $inplayOnly, featuredMatchesOnly: $featuredMatchesOnly, frontEndIds: $frontEndIds, earlySettlementOnly: $earlySettlementOnly, showAllMatch: $showAllMatch) {\n          id\n          frontEndId\n          matchDate\n          kickOffTime\n          status\n          updateAt\n          sequence\n          esIndicatorEnabled\n          homeTeam {\n            id\n            name_en\n            name_ch\n          }\n          awayTeam {\n            id\n            name_en\n            name_ch\n          }\n          tournament {\n            id\n            frontEndId\n            nameProfileId\n            isInteractiveServiceAvailable\n            code\n            name_en\n            name_ch\n          }\n          isInteractiveServiceAvailable\n          inplayDelay\n          venue {\n            code\n            name_en\n            name_ch\n          }\n          tvChannels {\n            code\n            name_en\n            name_ch\n          }\n          liveEvents {\n            id\n            code\n          }\n          featureStartTime\n          featureMatchSequence\n          poolInfo {\n            normalPools\n            inplayPools\n            sellingPools\n            ntsInfo\n            entInfo\n            definedPools\n          }\n          runningResult {\n            homeScore\n            awayScore\n            corner\n            homeCorner\n            awayCorner\n          }\n          runningResultExtra {\n            homeScore\n            awayScore\n            corner\n            homeCorner\n            awayCorner\n          }\n          adminOperation {\n            remark {\n              typ\n            }\n          }\n          foPools(fbOddsTypes: $fbOddsTypes) {\n            id\n            status\n            oddsType\n            instNo\n            inplay\n            name_ch\n            name_en\n            updateAt\n            expectedSuspendDateTime\n            lines {\n              lineId\n              status\n              condition\n              main\n              combinations {\n                combId\n                str\n                status\n                offerEarlySettlement\n                currentOdds\n                selections {\n                  selId\n                  str\n                  name_ch\n                  name_en\n                }\n              }\n            }\n          }\n        }\n      }\n      ",
        "variables":{
            "fbOddsTypes":[
                "HAD",
                "EHA"
            ],
            "fbOddsTypesM":[
                "HAD",
                "EHA"
            ],
            "featuredMatchesOnly":false,
            "startDate":null,
            "endDate":null,
            "tournIds":null,
            "matchIds":null,
            "tournId":null,
            "tournProfileId":null,
            "subType":null,
            "startIndex":1,
            "endIndex":120,
            "frontEndIds":null,
            "earlySettlementOnly":false,
            "showAllMatch":false,
            "tday":null,
            "tIdList":null
        }
    };

  try {
    const response = await axios.post(url, data);
    const matches = response.data.data.matches;
    // console.log(JSON.stringify(matches[0], null, 2));
    for(i=0; i<matches.length; i++) {
        // console.log(JSON.stringify(matches[i].tvChannels, null, 2));
        console.log(JSON.stringify(matches[i].tournament, null, 2));
        // console.log(JSON.stringify(matches[i].foPools[0].inplay, null, 2));
        // console.log(JSON.stringify(matches[i].runningResult.homeScore, null, 2));
        // console.log(JSON.stringify(matches[i].runningResult.awayScore, null, 2));
        // console.log(JSON.stringify(matches[i].runningResult.corner, null, 2));
        // console.log(JSON.stringify(matches[i].runningResult.homeCorner, null, 2));
        // console.log(JSON.stringify(matches[i].runningResult.awayCorner, null, 2));
        // console.log(JSON.stringify(matches[i].foPools[0].lines[0].combinations[0].currentOdds, null, 2)); //home
        // console.log(JSON.stringify(matches[i].foPools[0].lines[0].combinations[1].currentOdds, null, 2)); //away
        // console.log(JSON.stringify(matches[i].foPools[0].lines[0].combinations[2].currentOdds, null, 2)); //draw
    }
    
  } catch (error) {
    console.error("Error occurred:", error.message); // Handle errors
  }
}

// Call the function
postData();
