(function(window, undefined) {
  var dictionary = {
    "3204bd22-102b-4b14-abfe-ef658c233908": "YinkanaLogin",
    "bb036f90-1503-486e-9866-16025414879f": "YincanasOwn",
    "1d74de04-8cb0-4d7a-a82d-48ad30da5c36": "RankingMain",
    "5ee4fb54-4f86-49c9-8a61-5f81dfe7333b": "ViewYinkanaParti",
    "c6fd083d-fe81-48d4-9661-b9b1d05575da": "ManageYinkanaEquipo",
    "fee0a7e6-00f7-4034-8a65-a1161af62508": "AddYinkanaMain",
    "8a817580-b133-4b53-9150-9f463c2558ce": "AddYinkanaEquipADD",
    "0f91aea0-f26a-4910-bc3d-fff89e8e2452": "ManageYkEquipoADD",
    "27f6a849-0ebc-46a0-b6a3-e5e38f875319": "ViewActivity",
    "eab80562-a032-4cf7-a372-22c2129a7d9a": "AddYinkanaAct",
    "e91038ff-89e2-4415-9ef8-14077f293716": "YinkanaMainMsgConf",
    "2643bdc6-ef08-4ea7-a579-08eba09dc24b": "ViewMonitor",
    "b29c1815-9918-4743-8532-ca0a0d2a2e32": "YinkanaMain",
    "540677a2-f6c0-4ee6-8488-e97889ee7023": "ViewYinkanaMonitor",
    "490aeb50-6262-4a56-ae4b-0bd30aaacde3": "ManageYinkanaSocial",
    "bab78381-cf35-4f2f-86c6-742da9880e74": "YinkanaFilter",
    "e4b7f8d7-804a-4514-9a11-03d2af58a42f": "AddYinkanaEquip",
    "a87c6e74-4b9c-4919-bb71-65eefab81320": "NotificacionesOwn",
    "48636f1c-3a08-4507-81c2-9ba2f9b45442": "ManageYinkanaParti",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Noticias",
    "bf49c433-7b58-4935-b454-bacf99fe8682": "ActivityMain",
    "44cf2824-17a6-4942-b8aa-850ae60c7d8b": "ManageYinkanaAct",
    "1a5d5644-2566-413d-97cf-ecead93bd004": "ManageActivity",
    "7dce5c28-e21b-4b3f-a82b-b638dd05fab2": "ViewYinkanaEquipo",
    "81634b1a-6f96-40e9-ba33-a2176be2e259": "View Profile",
    "f2d908b6-62ed-460b-8959-a53d21456524": "ActivityFilter",
    "c4df4d69-8775-4a1f-92b8-1a029a83c1b8": "ManageYinkana",
    "07a23f51-3de9-47aa-928c-f88a63e5c872": "ManageProfile",
    "484ad880-3bc5-4592-8f1e-323012127646": "ViewYinkanaAct",
    "13c7681f-52eb-4bc4-8a5e-86844cbefa63": "ViewYinkana",
    "3464e316-99cd-4dda-83c7-238aaf00f553": "AddActivity",
    "a98c3965-16fe-4d1d-b4ba-3fb1ba674cbc": "RankingParti",
    "6223481a-f63b-481d-9424-2bebb6d08829": "ManageYinkanaPartiMsgConf",
    "87bc7c56-44f8-49d3-85b9-45f4ac66427e": "YinkanaRegistro",
    "8360c020-7bae-49ea-a29b-0fcf1ff426d8": "ManageYkPartiADD",
    "f8e25567-6fd5-48cf-8062-f349e4dd3347": "ViewYinkanaSocial",
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