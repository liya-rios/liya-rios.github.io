cl.setManifest({"config":{"feedbackRules":[{"feedbackType":"bbb-account-feedback","r":1,"eq":{"resourceSetName":"account"},"bools":["loggedIn","bootCookies.cl_b","pageVars.paidType.B"]},{"bools":["loggedIn","bootCookies.cl_b","pageVars.paidType.G"],"feedbackType":"ggg-account-feedback","r":1,"eq":{"resourceSetName":"account"}},{"feedbackType":"hhh-account-feedback","eq":{"resourceSetName":"account"},"r":1,"bools":["loggedIn","bootCookies.cl_b","pageVars.paidType.H"]},{"feedbackType":"jjj-account-feedback","r":1,"eq":{"resourceSetName":"account"},"bools":["loggedIn","bootCookies.cl_b","pageVars.paidType.J"]},{"r":1,"eq":{"resourceSetName":"account"},"feedbackType":"sss-account-feedback","bools":["loggedIn","bootCookies.cl_b","pageVars.paidType.S"]},{"feedbackType":"free-account-feedback","eq":{"resourceSetName":"account"},"r":1,"bools":["loggedIn","bootCookies.cl_b","pageVars.freeOnly"]},{"bools":["loggedIn","bootCookies.cl_b"],"r":1,"eq":{"pageVars.stage":"subarea","resourceSetName":"postingProcess"},"feedbackType":"posting-stage-subarea-feedback"},{"bools":["loggedIn","bootCookies.cl_b"],"r":1,"eq":{"resourceSetName":"postingProcess","pageVars.stage":"hood"},"feedbackType":"posting-stage-hood-feedback"},{"r":1,"eq":{"resourceSetName":"postingProcess","pageVars.stage":"type"},"feedbackType":"posting-stage-type-feedback","bools":["loggedIn","bootCookies.cl_b"]},{"feedbackType":"posting-stage-cat-feedback","eq":{"resourceSetName":"postingProcess","pageVars.stage":"cat"},"r":1,"bools":["loggedIn","bootCookies.cl_b"]},{"bools":["loggedIn","bootCookies.cl_b"],"feedbackType":"posting-stage-edit-feedback","r":1,"eq":{"pageVars.stage":"edit","resourceSetName":"postingProcess"}},{"bools":["loggedIn","bootCookies.cl_b"],"feedbackType":"posting-stage-geoverify-feedback","r":1,"eq":{"resourceSetName":"postingProcess","pageVars.stage":"geoverify"}},{"bools":["loggedIn","bootCookies.cl_b"],"r":1,"eq":{"pageVars.stage":"editimage","resourceSetName":"postingProcess"},"feedbackType":"posting-stage-editimage-feedback"},{"bools":["loggedIn","bootCookies.cl_b"],"r":1,"eq":{"pageVars.stage":"preview","resourceSetName":"postingProcess"},"feedbackType":"posting-stage-preview-feedback"},{"r":1,"eq":{"pageVars.stage":"finalize","resourceSetName":"postingProcess"},"feedbackType":"posting-stage-finalize-feedback","bools":["loggedIn","bootCookies.cl_b"]}],"imageUrlCatalog":{"image":{"2":{"host":"images.craigslist.org","sizes":["50x50c","300x300","600x450","1200x900"]},"1":{"host":"images.craigslist.org","sizes":["50x50c","300x300","600x450","1200x900"]},"3":{"sizes":["50x50c","300x300","600x450","1200x900"],"host":"images.craigslist.org"},"4":{"sizes":["50x50c","300x300","600x450","1200x900"],"host":"images.craigslist.org"},"0":{"sizes":["50x50c","300x300","600x450"],"host":"images.craigslist.org"}},"chat":{"0":{"host":"capi.craigslist.org","sizes":["50x50c","300x300","600x450","1200x900"]}}},"wwwUrlCatalog":{"subareaHubSearch":["$areaHost/search/$subareaAbbr/$hubName"],"aboutFha":["www/about/FHA"],"about":["www/about"],"accountSettings":["accounts/login/home",{"show_tab":"settings"}],"chatImage":["$chatImageHost/$apiVersion/chat/$chatId/images/$imageId"],"help":["www/about/help"],"myFavorites":["$areaHost/favorites",{"fl":"$encodedItems"}],"accountSearches":["accounts/login/home",{"show_tab":"searches"}],"forums":["forums"],"bestOfAll":["www/about/best/all"],"areaCategorySearch":["$areaHost/search/$categoryAbbr"],"privacy":["www/about/privacy.policy"],"areaHubSearch":["$areaHost/search/$hubName"],"tou":["www/about/terms.of.use"],"scams":["www/about/scams"],"postingSeo":["$areaHost/$categoryAbbr/$seo/$pid.html"],"subareaHome":["$areaHost/$subareaAbbr/"],"accountLogout":["accounts/logout",{"this_browser_only":"1"}],"zipList":["$areaHost/codegeo",{"lat":"$lat","lon":"$lon"}],"flag":["post/flag"],"aboutRecalledItems":["www/about/recalled_items"],"safety":["www/about/safety"],"subareaPosting":["$areaHost/$subareaAbbr/$categoryAbbr/$pid.html"],"sites":["www/about/sites"],"accountBillings":["accounts/login/home",{"show_tab":"billing"}],"accountDrafts":["accounts/login/home",{"show_tab":"drafts"}],"accountSaveSearch":["accounts/savesearch/save",{"URL":"$searchUrl"}],"image":["$imageHost/$imageId"],"posting":["$areaHost/$categoryAbbr/$pid.html"],"subareaPostingSeo":["$areaHost/$subareaAbbr/$categoryAbbr/$seo/$pid.html"],"geoHubSearch":["$areaHost/search/$cityPathSegment/$hubName"],"singleFieldSearch":["$areaHost/search/field/$field",{"cl_url":"$clUrl"}],"home":["$areaHost"],"whereAmI":["$areaHost/whereami",{"url":"$url"}],"helpForum":["forums",{"forumID":"9"}],"accountDefault":["accounts/login/home"],"post":["post/c/$areaAbbr"],"geoHome":["$areaHost/location/$cityPathSegment"],"aboutApp":["www/about/craigslist_app"],"feedbackForum":["forums",{"forumID":"8"}],"hiring":["www/about/craigslist_is_hiring"],"classifiedPostingReply":["$areaHost/reply/$areaAbbr/$categoryAbbr/$pid/__SERVICE_ID__"],"geoCategorySearch":["$areaHost/search/$cityPathSegment/$categoryAbbr"],"myBanished":["$areaHost/favorites",{"uf":"1","fl":"$encodedItems"}],"aboutProhibited":["www/about/prohibited"],"autocomplete":["$areaHost/suggest",{"cat":"$categoryAbbr","type":"$autocompleteType","term":"$term"}],"accountPostings":["accounts/login/home",{"show_tab":"postings"}],"subareaCategorySearch":["$areaHost/search/$subareaAbbr/$categoryAbbr"],"searchFieldHelp":["www/about/helptext/search_field"]},"apiUrlCatalog":{"userFeedbackWeb":["wapi/web/v8/userfeedback",{"cc":"$cc","userName":"$userName","feedbackMessage":"$feedbackMessage","subject":"$subject","lang":"$lang","feedbackType":"$feedbackType","login":"$login"}],"chatListMessagesWeb":["capi/web/v8/chat/$id",{"id":"$id","last":"$last","cc":"$cc","limit":"$limit","lang":"$lang"}],"suggestPostingFormWeb":["rapi/web/v8/suggest/posting-form/$cat",{"cat":"$cat"}],"searchWeb":["sapi/web/v8/postings/search",{"startIndex":"$startIndex","subarea":"$subareaAbbr","cc":"$cc","area_id":"$areaId","batchSize":"$batchSize","minDate":"$minDate","lang":"$lang","searchPath":"$searchPath"}],"searchCountWeb":["sapi/web/v8/categories/count",{"query":"$query","lang":"$lang","postal":"$postal","cc":"$cc","subarea":"$subarea","areaId":"$areaId","search_distance":"$search_distance","lat":"$lat","lon":"$lon"}],"chatSearchMessagesWeb":["capi/web/v8/chat/search",{"lang":"$lang","limit":"$limit","cc":"$cc","search":"$search","id":"$id"}],"chatCreateWeb":["capi/web/v8/postings/$id/chat",{"type":"$type","id":"$id","cc":"$cc","lang":"$lang","content":"$content"}],"syncFavoritesWeb":["wapi/web/v8/user/favorites/sync",{"lang":"$lang","banishedToAdd":"$banishedToAdd","favesToAdd":"$favesToAdd","favesToDelete":"$favesToDelete","banishedToDelete":"$banishedToDelete","cc":"$cc"}],"passwordStatusWeb":["wapi/web/v8/user/password/status",{"cc":"$cc","key":"$key","lang":"$lang","userid":"$userid"}],"findByIdsWeb":["sapi/web/v8/postings/find_by_ids",{"cc":"$cc","ids":"$ids","area_id":"$areaId","query":"$query","lang":"$lang"}],"notificationListWeb":["capi/web/v8/user/notification",{"limit":"$limit","lang":"$lang","cc":"$cc","last":"$last","timeout":"$timeout"}],"postingWeb":["rapi/web/v8/postings/$hostname/$subareaAbbr/$categoryAbbr/$id",{"hostname":"$hostname","lang":"$lang","subareaAbbr":"$subareaAbbr","cc":"$cc","categoryAbbr":"$categoryAbbr"}],"passwordCreateWeb":["wapi/web/v8/user/password/create",{"key":"$key","cc":"$cc","goPasswordless":"$goPasswordless","lang":"$lang","userid":"$userid","inputNewPassword":"$inputNewPassword"}],"chatCreateMessageWeb":["capi/web/v8/chat/$id",{"lang":"$lang","content":"$content","type":"$type","id":"$id","cc":"$cc"}],"userAcceptTouWeb":["wapi/web/v8/user/acceptTou",{"cc":"$cc","lang":"$lang","step":"$step"}],"chatCreateImageWeb":["capi/web/v8/chat/$id/image",{"file":"$file","lang":"$lang","cc":"$cc","id":"$id"}],"resultCountsWeb":["sapi/web/v8/categories/counts-for-search-url",{"url":"$url","lang":"$lang","cc":"$cc","include_types":"$include_types"}],"suggestWeb":["sapi/web/v8/suggest/location",{"query":"$query","lat":"$lat","lang":"$lang","lon":"$lon","cc":"$cc"}],"loginOnetimeWeb":["wapi/web/v8/user/login/onetime",{"cc":"$cc","lang":"$lang","browserinfo3":"$browserinfo3","inputEmailHandle":"$inputEmailHandle"}],"loginUserWeb":["wapi/web/v8/user/login",{"inputEmailHandle":"$inputEmailHandle","lang":"$lang","browserinfo3":"$browserinfo3","cc":"$cc","inputPassword":"$inputPassword"}],"locationsWeb":["rapi/web/v8/locations",{"cc":"$cc","lang":"$lang","lat":"$lat","lon":"$lon"}],"searchFull":["sapi/web/v8/postings/search/full",{"batch":"$batch","lang":"$lang","searchPath":"$searchPath","cc":"$cc"}],"searchBatch":["sapi/web/v8/postings/search/batch",{"cc":"$cc","lang":"$lang","batch":"$batch","cacheId":"$cacheId"}],"chatListWeb":["capi/web/v8/chat",{"last":"$last","cc":"$cc","limit":"$limit","lang":"$lang","includeMessages":"$includeMessages"}],"webCounter":["rapi/web/v8/counter",{}]},"apiVersion":"v8","map":{"tileBase":"//map{s}.craigslist.org/t09/{z}/{x}/{y}.png","imageUrl":"https://www.craigslist.org/images/map/"}},"posting":[["boot.es5.js","2024-02-13-07-59","8202af841d1ed558a2f13a6534eb72329bda36d3",false],["polyfill.es5.js","2024-01-22-11-49","6ce9a8fdc0974a88af6f2efcb504d94cc6bc9157",true],["public-es5-libs.js","2023-05-02-18-40","77397ed581bdd193d31aef209a46994e7c6c2830",false],["public-es5-libs.es5.js","2023-05-02-18-40","c9f1d6e98be27b8f2d4a79506a04884756cfbccb",false],["lib.js","2024-02-28-07-39","18773977ed65fa54dad3b29d56a75263b29000a7",false],["lib.es5.js","2024-02-28-07-39","85627a68dc990d73282a8913d109b9e83a908d8a",false],["localStorage.html","2021-02-09-06-40","092e9f9e2f09450529e744902aa7cdb3a5cc868d",false],["posting.css","2024-02-23-17-51","4793854b406a1e1c91de70c67e70e0f55f0a428b",true],["browsePostings.js","2024-02-28-21-21","059b38d4de147a88719e9a1855e73450871cedef",true],["browsePostings.es5.js","2024-02-28-20-37","524d93037c06ba2490dace7fdc2a410a7b306ee2",true],["testCatalog.js","2024-01-30-06-07","e50c25217bf9422639464db2d05ebe87be2c2fc3",false],["testCatalog.es5.js","2024-01-30-06-07","9903134fbedf9f3bba3bb31278e838d669776361",false]],"translations":[["da-DK.es5.js","2024-02-20-09-13","5fe141eb12986cb8dee49f84f672e5341e7a9747",false],["de-DE.es5.js","2024-02-20-09-13","d37ba73765ef71ddb6ab4979bcaf0eb8276913b6",false],["en-GB.es5.js","2024-02-20-09-13","e9d725f42b8fb53dc1498280374d76d6e6954aa1",false],["en-IE.es5.js","2024-02-20-09-13","c864f7783fee9ab92945f5a53d0c41f72f8fc13f",false],["es-ES.es5.js","2024-02-20-09-13","c7dee99b5abaa5ed49ab8e1cb6cf022300aa1fce",false],["es-MX.es5.js","2024-02-29-09-09","54a642f8d0081d569e6b5054669a62174f78d600",false],["fi-FI.es5.js","2024-02-20-09-13","dce7cd43eb69b4baa387799ed551437c5294f673",false],["fr-CA.es5.js","2024-02-20-09-13","cfa40faba02b86495a725be277d2b159e0389423",false],["fr-FR.es5.js","2024-02-20-09-13","7085eee603be70518f64c6ea74cb3f5bacc02f2b",false],["it-IT.es5.js","2024-02-26-09-25","d556a515afd56a7dd151635343b7a3ae55cac96f",false],["ja-JP.es5.js","2024-02-26-09-25","6f74d1818e86cdc23bb464ad98ca43da1ca26eef",false],["ko-KR.es5.js","2024-02-26-09-25","4a0577dd5bffc9caf8a30a8f490b7a0ebf07d0bf",false],["pt-BR.es5.js","2024-02-29-09-09","2fc3a258d746b1f7881021a241ce39f54e984386",false],["ru-RU.es5.js","2024-02-26-09-25","87168f47ae3a34da34ea07bea5965b0027609a7c",false],["sv-SE.es5.js","2024-02-26-09-25","b69b68db9d761a2ccdab1d15b5accfa147297322",false],["tr-TR.es5.js","2024-02-26-09-25","7dda9bde14851c45ba6d1363a2e319348995517d",false],["vi-VN.es5.js","2024-02-26-09-25","2fd2e5f37903b0762aba05952c9baaa54b6dc956",false],["zh-CN.es5.js","2024-02-26-09-25","44c163b05f0cde0e209d5e14c65f94dc37448931",false]],"account":[["boot.es5.js","2024-02-13-07-59","8202af841d1ed558a2f13a6534eb72329bda36d3",false],["polyfill.es5.js","2024-01-22-11-49","6ce9a8fdc0974a88af6f2efcb504d94cc6bc9157",true],["localStorage.html","2021-02-09-06-40","092e9f9e2f09450529e744902aa7cdb3a5cc868d",false],["www.css","2024-02-21-15-27","ae4c59663eedf9ee28d2aadb443ef6617ade3348",true],["account.js","2024-02-28-21-21","8ca92fb4a3032c12433431871c2ed86dd7ba8430",true],["account.es5.js","2024-02-28-20-37","375b895a338533e42812d68dc646a9e6cec2a8bf",true]],"search":[["boot.es5.js","2024-02-13-07-59","8202af841d1ed558a2f13a6534eb72329bda36d3",false],["polyfill.es5.js","2024-01-22-11-49","6ce9a8fdc0974a88af6f2efcb504d94cc6bc9157",true],["localStorage.html","2021-02-09-06-40","092e9f9e2f09450529e744902aa7cdb3a5cc868d",false],["www.css","2024-02-21-15-27","ae4c59663eedf9ee28d2aadb443ef6617ade3348",true],["search.js","2024-02-28-21-21","b48c5879c426e0e3c94a9a14062e9cec574ce789",true],["search.es5.js","2024-02-28-20-37","53f80982d020ae18fb16ebbf9e6f67b002d8746c",true]],"postingProcess":[["boot.es5.js","2024-02-13-07-59","8202af841d1ed558a2f13a6534eb72329bda36d3",false],["polyfill.es5.js","2024-01-22-11-49","6ce9a8fdc0974a88af6f2efcb504d94cc6bc9157",true],["localStorage.html","2021-02-09-06-40","092e9f9e2f09450529e744902aa7cdb3a5cc868d",false],["www.css","2024-02-21-15-27","ae4c59663eedf9ee28d2aadb443ef6617ade3348",true],["post.js","2024-02-28-21-21","24520211b06b54bdd5555a79078fce89c600ae33",true],["post.es5.js","2024-02-28-20-37","299575d3565aba9c52efc26503177efdc43c308f",true]],"homePage":[["boot.es5.js","2024-02-13-07-59","8202af841d1ed558a2f13a6534eb72329bda36d3",false],["polyfill.es5.js","2024-01-22-11-49","6ce9a8fdc0974a88af6f2efcb504d94cc6bc9157",true],["public-es5-libs.js","2023-05-02-18-40","77397ed581bdd193d31aef209a46994e7c6c2830",false],["public-es5-libs.es5.js","2023-05-02-18-40","c9f1d6e98be27b8f2d4a79506a04884756cfbccb",false],["lib.js","2024-02-28-07-39","18773977ed65fa54dad3b29d56a75263b29000a7",false],["lib.es5.js","2024-02-28-07-39","85627a68dc990d73282a8913d109b9e83a908d8a",false],["localStorage.html","2021-02-09-06-40","092e9f9e2f09450529e744902aa7cdb3a5cc868d",false],["homePage.css","2024-02-21-15-27","364662dbea01ced11acfc4460392422d69a88ab5",true],["browsePostings.js","2024-02-28-21-21","059b38d4de147a88719e9a1855e73450871cedef",true],["browsePostings.es5.js","2024-02-28-20-37","524d93037c06ba2490dace7fdc2a410a7b306ee2",true],["testCatalog.js","2024-01-30-06-07","e50c25217bf9422639464db2d05ebe87be2c2fc3",false],["testCatalog.es5.js","2024-01-30-06-07","9903134fbedf9f3bba3bb31278e838d669776361",false]],"browsePostings":[["boot.es5.js","2024-02-13-07-59","8202af841d1ed558a2f13a6534eb72329bda36d3",false],["polyfill.es5.js","2024-01-22-11-49","6ce9a8fdc0974a88af6f2efcb504d94cc6bc9157",true],["public-es5-libs.js","2023-05-02-18-40","77397ed581bdd193d31aef209a46994e7c6c2830",false],["public-es5-libs.es5.js","2023-05-02-18-40","c9f1d6e98be27b8f2d4a79506a04884756cfbccb",false],["lib.js","2024-02-28-07-39","18773977ed65fa54dad3b29d56a75263b29000a7",false],["lib.es5.js","2024-02-28-07-39","85627a68dc990d73282a8913d109b9e83a908d8a",false],["localStorage.html","2021-02-09-06-40","092e9f9e2f09450529e744902aa7cdb3a5cc868d",false],["browsePostings.css","2024-02-21-15-27","5680a72fe02a4fe86d2f9efe5d070839036c3c91",true],["browsePostings.js","2024-02-28-21-21","059b38d4de147a88719e9a1855e73450871cedef",true],["browsePostings.es5.js","2024-02-28-20-37","524d93037c06ba2490dace7fdc2a410a7b306ee2",true],["testCatalog.js","2024-01-30-06-07","e50c25217bf9422639464db2d05ebe87be2c2fc3",false],["testCatalog.es5.js","2024-01-30-06-07","9903134fbedf9f3bba3bb31278e838d669776361",false]],"sitemap":[["boot.es5.js","2024-02-13-07-59","8202af841d1ed558a2f13a6534eb72329bda36d3",false],["polyfill.es5.js","2024-01-22-11-49","6ce9a8fdc0974a88af6f2efcb504d94cc6bc9157",true],["public-es5-libs.js","2023-05-02-18-40","77397ed581bdd193d31aef209a46994e7c6c2830",false],["public-es5-libs.es5.js","2023-05-02-18-40","c9f1d6e98be27b8f2d4a79506a04884756cfbccb",false],["lib.js","2024-02-28-07-39","18773977ed65fa54dad3b29d56a75263b29000a7",false],["lib.es5.js","2024-02-28-07-39","85627a68dc990d73282a8913d109b9e83a908d8a",false],["localStorage.html","2021-02-09-06-40","092e9f9e2f09450529e744902aa7cdb3a5cc868d",false],["sitemap.css","2023-07-17-18-17","ebceb759db99a8de711bd070e6d2a6897252f825",true]]});