(function(window, undefined) {
  var dictionary = {
    "3335fa2a-310b-4917-8a87-c2f79ceca5d9": "19",
    "aa4c190f-dcdf-4318-943f-97bc3f2889fa": "18",
    "6b9ba47b-4b3a-498e-8878-2883243e0605": "17",
    "20f2ba2f-075c-4fca-9af3-92218f2cd4c1": "16",
    "6a2fcd7b-d51e-4145-bb97-a54ed9a73020": "15",
    "770b334b-2840-4936-8c5f-524e4db6104a": "14",
    "20be5db7-278a-4d18-8590-597e629c9da1": "13",
    "e977a207-47ee-4a16-8c28-fb453dc010e1": "12",
    "6a0ab637-6c92-4c2c-ade3-7b209d1feca5": "11",
    "efc72307-833b-4e3b-9059-42a2b06382f8": "10",
    "61567853-63d5-4940-837b-dbff854a28a7": "9",
    "a2b1d165-a66d-40f9-85c8-4dfb2b21c3d4": "8",
    "4c8a1b27-ae6e-45f6-86ae-6c44fe6fb903": "7",
    "89e016f1-92d0-4ec6-9406-4dee63a758f2": "6",
    "89d8d5a1-a1d6-47fc-9b5b-8b9ec66c6484": "5",
    "3120786b-4e60-45e7-8ec5-12af5f9fed34": "4",
    "178b5e33-27e1-469c-9f5b-714f51180ce3": "3",
    "50c439c5-4843-4156-be09-766e5867d164": "24",
    "7868838c-081c-40f1-a88a-32a9ce8779b3": "2",
    "447ae799-207c-43e4-bd9e-7a3ffcb33672": "23",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "1",
    "9c53c824-0daf-4e09-963d-4adde4f5649c": "22",
    "eec8ec46-8812-443d-9a7d-7e5708f5cdc6": "21",
    "3a079e8c-28f7-42d8-9e64-ae0f43ef4ce5": "20",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);