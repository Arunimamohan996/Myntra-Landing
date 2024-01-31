var dealsArr = [{
    img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/29/2eaab0d6-e843-4ad2-b1da-2159d1d30e9e1648537708005-WONDERFUL-DEALS-AHEAD-.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/aa52212a-f867-4315-9b8b-355261ba0e651647679856552-Shirts---Trousers.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/d506dd29-7339-48c5-8a22-a5fbfdfe16951647679856512-Top-Selling-Kurtas-----1.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/126557af-2621-4b2d-82e6-692d643798301647679856536-Casual-Tees.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/8492fba6-0552-4dfa-923d-e7e667fb92ee1647679856527-Heels.jpg"
},

{
    img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/a183b4a3-5f4c-46c0-98e4-6711f6495af51647679856543-Bath-Essentials.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/f391abc2-aae9-4d9b-bc67-caef1676b3611647679856520-Premium-Timepieces.jpg"
},
];

dealsArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#deals").append(box);
});

var bestArr = [{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/b25f89eb-fbeb-4013-829e-32ee5b5daaa01646895183668-Roadster-HRX_Unisex.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/bfa5c871-a5a5-4d81-b46e-18aedccfdc9b1644407437913-Kurta_sets-_Anouk-_AAY_-_more.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/046147d1-1874-4c10-adb9-6dbd88b606e71644407437923-Kurtas-_Anouk-_Sangria_-_more.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/76acf345-fc62-4b49-8b2c-9c0fc9c925311644407437977-Tops_-_Dressberry-_AAY_-_more.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3923c0c1-2260-4f0e-9598-15b6f9d7731c1644407437960-Roadster_and_H-N_Shirts.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eb70855e-98c4-412d-bf20-50804546d57e1644407437883-Dresses_-_Dressberry-_Chemistry_-_more.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eff5a33f-ea24-4e70-84e5-ec4d25ee5c7b1644407437968-Roadster_and_KnK_Tshirts.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/667a71f0-c24b-4a00-a98c-cc6a54a815e91644407437985-Tshirts_-_Roadster-_KnK_-_more.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/ffaa74a6-4824-4b19-8936-70ffaef92f001644407437937-M-H_and_HRX_Tshirts.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/f9621136-0f00-44d5-aa06-b727a6c8f7c51644407437944-M-H_and_Wrogn_Shirts.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3f41465b-7109-4bb2-bf79-ab89ff2128be1644407437899-HRX_and_Harvard_Trackpants.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/745cec57-af58-4ba6-8ae1-a3ccbe7c54e91644407437930-Lingerie_-_Loungewear_-_DB-_ETC.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/e27ee3af-3f6b-4106-9b20-2b4463c80ba41644407437953-Roadster-_Wrogn_Jeans.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/2b15a87a-1d92-4edf-99c2-ec390a38089e1644407437872-Activewear_-_HRX-_Slazenger.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/931b0b8f-c14d-4ec7-b923-cf512de991731644407437891-HOP_and_Anouk_Kurtas_-_sets.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/201d1bfd-287e-47b6-bef6-3c46eac444a51644407437906-Jeans_-_Roadster-_M-H_and_more.jpg"
},
];

bestArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#best").append(box);
});


var topArr = [{
    img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/062cea23-9a6a-44b9-bdd4-87cae6a462311645602543339-Kurta-sets.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/8d65d400-decd-4f42-902c-a40350a16ed11645602543346-Kurtas.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/398ee53b-5899-4a9a-9d0b-b35d60c01cb41645602543325-Dresses.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/2f410d81-7fae-400e-9ecc-b4a8b6df72b91645602543430-Women-Jeans.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/82a9be01-3032-4725-9500-bcc94366b7931645602543399-Mens-Shirts.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/c6b09c0f-5c57-472c-a3fc-854ec506a90e1645602543387-Men-T-shirt.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f08e2bac-9bed-4f87-b022-0dce8defeded1645602543380-Men-Trousers.jpg"
},
];

topArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#top").append(box);
});


var categoriesArr = [{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aa4658b5-d723-4652-9ea1-00456b355c3a1645602467046-Kurta-Sets.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b156f76a-26e7-4bce-9941-8a67d3c16f331645602467120-Teens-Wear.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/fb091b07-c275-4578-b08d-b4f93dfe9e841645602466976-Beauty.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b827f900-ed61-4467-84fa-a6e357787e761645602467079-Plus-Size-Styles_W.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/cd083042-3bb2-4231-8b96-0234fc0ed23f1645602467032-Jeans.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/736f3951-e67b-414f-bfb1-56e2794d441d1645602467114-Sports-Shoes.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d13255df-c846-4dbd-8458-77ccaba4f9eb1645602467142-Trousers.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/5860c3c2-a639-4625-ac1d-4d55406f128a1645602467134-Track-Pants.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/07e5c29a-2eab-4b2d-b617-6565ffe1f4701645602467025-Innerwear.jpg"
},
];

categoriesArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#categories").append(box);
});

var dealsTopArr = [{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/3/f0dc0024-a8d3-4aec-9e1b-d9b6873b52d51599144996663-Crocs.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/85d5e2e1-fa21-43b0-a352-438e15f1006e1598892141455-Nike.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/22b908fa-38aa-46a6-a3cd-a5ccd46b04ce1598892141560-Puma.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/26/adc58a2c-fa18-4b94-b2d6-4c692a44123d1601115417606-unnamed--6-.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8238147e-a86e-4fe4-a830-ab5c2c49beba1598892141840-W.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/7d0153c1-2fc4-49ec-ac7c-3c402d1ed45f1598948396008-USPA.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/c6a4ec29-f907-4d54-8ed7-83006938b20c1598892141612-Tommy-Hilfiger.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/d1fab403-7742-4a91-a781-2e36bea65a8a1598445950683-Men-s-Apparel---Roadster.png"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/4abbda25-8d58-44f7-a986-c80fa31b08b31598892141513-Only.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/72af0092-fd16-4b61-b1fb-e617c089fe251598456566139-image_jpeg1938580873.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/9/5a5a162e-c4ad-4497-b995-a3c077d25df71596975348916-Women-s-Ethnic-Wear_Vishudh.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/da4935ce-8f3f-4273-bfbe-6ded783cf2131598948352513-Levis.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/ee953e28-7ca8-4e08-a6a9-c51c98f823411598892141010-BIBA.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/08f15f56-156e-45c8-b0bc-7aecd0b122431598970514602-Veromoda.jpg"
},    
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ec275a-9d3a-432c-b3df-736a7e9518d11598892141670-UCB.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/0390ad1a-1262-4f7a-8f81-37c1644142a91598445950839-Sports---HRX-by-Hrithik-Roshan.png"
},
];

dealsTopArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#dealsTop").append(box);
});

var unmissableArr = [{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/1ec9ffd5-335f-4ecb-a7e9-ea403da9a7df1645805770868-SS22-SeasonChecklist-PricePoints-CleanBlueDenim.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/a0e60587-5d1e-41f0-9d5f-f42a925a55921645793729467-SS22-SeasonChecklist-Trending-BlockHeels.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/99a29231-2050-4fde-ad40-efa35de66e5b1645805770994-SS22-SeasonChecklist-PricePoints-TrendySneakers.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/bdde4d47-9908-4764-b09e-5a55034e32b01645793729554-SS22-SeasonChecklist-Trending-Loungewera.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/6bcf042c-5f07-47e2-a1cb-3da58c4f94951645793729590-SS22-SeasonChecklist-Trending-SlipOns.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/50c525cc-6724-4d41-9e97-5b931a33631b1645806100291-SS22-SeasonChecklist-AddOns-New-Season-Wallets_.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/62ef932d-b023-4c34-b649-bc3b399057a31646114955627-SS22-SeasonChecklist-Styling-Women-Kurtas.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/518f4774-cd01-4076-b2ee-03170d232c161645793729608-SS22-SeasonChecklist-Trending-Stylecast.jpg"
},
];

unmissableArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#unmissable").append(box);
});

var coloursArr = [{
    img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/53a0e7bc-64e7-4fb3-94fd-a1ada51fbefa1647516450800-SS22-Colours-Metallic-Hues.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/a6ef0785-eb3c-4726-a6ba-c09f6a44379c1647516450782-SS22-Colours-Elegant-Olive.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/65446aed-c0e9-4bab-af02-3e96c6ad7ab51646753796263-SS22-Colours-Cobalt.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/3b1d43f4-46bf-4e3f-903b-ec5ca5c2bac91645860983331-SS22-Colours-Mens-BreezyWhite.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/96018800-d6b6-47e1-9998-62de5ce5c16a1647516450837-SS22-Colours-Soft-Pastels.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/389fe98d-b379-4816-9411-63624b03c0671647516450765-SS22-Colours-Electric-Lime.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/c1c00661-aff4-439e-9fd1-76982e7784831647516450875-SS22-Colours-Turquoise-Blue.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/3a8ac38f-76fe-4ee4-84fa-f9bd4947c4431647516450746-SS22-Colours-Coffee-Browns.jpg"
},

];

coloursArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#colours").append(box);
});

var topInfluencersArr = [{
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/c7fff41e-a426-4188-b319-bde1651f109e1647417948711-Studiocontent-HPBanner-Men-FestiveWearBythomson_19071gif.gif"
},
{
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/ab0ac260-8f5d-4a64-a626-83b58129e3491647417948743-Studiocontent-HPBanner-Women-WeddingOutfitsBy-thankgod_itsfashion.gif"
},
{
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/d210ddcf-73f4-4044-a75d-e8a6665fb9151647417948735-Studiocontent-HPBanner-Women-PartyLooksByiamartichauhan.gif"
},
{
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/8872ea7e-92a1-4be6-9706-d78845d480781647417948726-Studiocontent-HPBanner-Men-StreetWearByurban.lad.gif"
},
{
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/462e80ef-51d4-4a81-a509-72d45ec7f6331647417948751-Studiocontent-HPBanner-Women-WorkWearBasicsByoutlanSrish.gif"
},
{
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/f6826795-22fa-4d40-8573-d5e1ee1178531647417948719-Studiocontent-HPBanner-MenGymBasicsByiakashchoudhary.gif"
},
];

topInfluencersArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#topInfluencers").append(box);
});

var budgetArr = [{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/f7dd9f7e-e99d-42ee-b968-22ffa616d8681647418063204-Studiocontent-HPGrid-SummerShirts.png"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/13c90fd6-62ca-459a-86c6-ebdf19617a251647418063195-Studiocontent-HPGrid-ClassicDenim.png"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/973855e5-a1d8-4a4a-810c-60a02068b0cb1647418043970-Studiocontent-HPGrid-TrendyTops.png"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/bf5c8576-26e6-42a7-a4d0-eba5dd2a59f11647418043962-Studiocontent-HPGrid-SummerSkirts.png"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/f9d82a54-06f3-4bfb-8dd3-0f6c258212a71647418043955-Studiocontent-HPGrid-ElegantSarees.png"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/e14a3767-485e-4f99-a92f-e5880dcc39181647418063210-Studiocontent-HPGrid-TraditionalKurtas.png"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/5ba2861b-33cd-45cb-a526-cca93d2629a31647418063217-Studiocontent-HPGrid-TrendyTshirts.png"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/37ad6a46-8dfc-46cc-9d4b-a1781079a0511647418043947-Studiocontent-HPGrid-DreamyDresses.png"
},
];

budgetArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#budget").append(box);
});

var trendingArr = [{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/0d7a22b9-e201-44db-ba04-6dfba8ebd5061647418012721-Studiocontent-HPCarousel-Women-WesternWear.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/d8bee915-9dbd-4cbb-9562-896dd16afdf31647418012563-Studiocontent-HPCarousel-Men-BeyondBasicsCasulaWear.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/fa1a37d5-db35-4df5-9f3b-dfeebf9a22bd1647418012703-Studiocontent-HPCarousel-Women-IndianWearGuide.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/843d4a44-833a-4179-a5a2-7f8c52bb1ef71647418012580-Studiocontent-HPCarousel-Men-FootwearFavouritesjpg.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/ce751fad-7e3a-456d-87cd-457c6de7fccc1647418012597-Studiocontent-HPCarousel-Men-FormalWear.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/0b6937a5-cf76-49c6-a3ab-551b7a17fafa1647418012686-Studiocontent-HPCarousel-Women-GymWear.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/3edddaf4-c192-4651-966d-6b8e04fa309b1647418012668-Studiocontent-HPCarousel-Women-FormalWear.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/99b98dd2-83e4-4ac1-b2a5-b0bf8b81d62a1647418012633-Studiocontent-HPCarousel-Men-LoungeWear.jpg"
},

];

trendingArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#trending").append(box);
});


var footer = `<div id="mainbox" class="container-fluid row">
<div class="box1 col-12 col-sm-6 col-md-3">
    <h5 class="h5_g" >ONLINE SHOPPING</h5>
    <a href="">Men</a>
    <br>
    <a href="">Women</a>
    <br>
    <a href="">Home&Living</a>
    <br>
    <a href="">Beauty</a>
    <br>
    <a href="">Gifts Cards</a>
    <br>
    <a href="">Myntra Insider <a id="new">New</a></a>
    <!-- <p><a href="">Men</a></p>
    <p><a href="">Women</a></p>
    <p><a href="">Kids</a></p>
    <p><a href="">Home&Living</a></p>
    <p><a href="">Beauty</a></p>
    <p><a href="">Gifts Cards</a></p>
    <p><a href="">Myntra Insider</a></p> -->
</div>
<div  class="box2 col-12 col-sm-6 col-md-3">
    <h5 class="h5_g" >USEFUL LINKS</h5>
 <a href="">Contact Us</a>
 <a href="">FAQ</a>
 <a href="">T&C</a>
 <a href="">Terms Of Use</a>
 <a href="">Track Orders</a>
 <a href="">Shipping</a>
 <a href="">Cancellation</a>
 <a href="">Returns</a>
 <a href="">Whitehat</a>
 <a href="">Blog</a>
 <a href="">Careers</a>
 <a href="">Privacy Policy</a>
 <a href="">Site Map</a>
 <a href="">Corporate Information</a>

</div>
<div  class="box3 col-12 col-sm-6 col-md-3">
    <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
   <a href=""><img class="logo1" src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt=""></a> 
   <a href=""> <img class="logo1" src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt=""></a>

   <h5>KEEP IN Touch</h5>
<a href=""><img class="logo2" src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt=""></a>
<a href=""><img class="logo2" src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png " alt=""></a>
<a href=""> 
<img class="logo2" src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" alt=""></a>
<a href="">  <img class="logo2" src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" alt=""></a>
 
</div>

<div  class="box4">
    <div class="l1r1">
        <div class="l1">
            <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="">

             </div>
             <div class="r1" >
                 <p><span>100% ORIGINAL</span> guarantee for all products at myntra.com</p>
             </div>
    </div>

    <div class="l1r1">
        <div class="l1">
            <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="">

             </div>
             <div class="r1" >
                 <p><span>Return within 30days</span>  of receiving your order</p>
             </div>
    </div>
  
    
</div>
</div>
<!-- play store page done here -->

<!-- popular end here -->
<div id="regi" class="row">
<div class="regi1 class="col-6 col-sm-3 col-md-2"">
<h4>Registered Office Address</h4>
<span>Buildings Alyssa,</span>
<span>Begonia and Clover situated in Embassy Tech Village,</span>
<span>Outer Ring Road,</span>
<span>Devarabeesanahalli Village,</span>
<span>Varthur Hobli,</span>
<span>Bengaluru – 560103, India</span>


</div>
<div class="regi2 col-6 col-sm-3 col-md-2">
<span>CIN: U72300KA2007PTC041799</span>
<span>Telephone: <a href="">+91-80-61561999</a></span>
</div>
</div>
<div id="best1">
<h4>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h4>
<p>Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</p>
<div class="best1">
<p>1.  <span>Smart men’s clothing    </span> - At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.</p>
<p>2.  <span>Trendy women’s clothing -    </span> Online shopping for women at Myntra is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand sarees and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.</p>
<p>3.  <span>Fashionable footwear -    </span> While clothes maketh the man, the type of footwear you wear reflects your personality. We bring you an exhaustive lineup of options in casual shoes for men, such as sneakers and loafers. Make a power statement at work dressed in brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose shoes for individual games such as tennis, football, basketball, and the like. Or step into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats.</p>
<p>4.  <span>Stylish accessories -   </span>  Myntra is one of the best online shopping sites for classy accessories that perfectly complement your outfits. You can select smart analogue or digital watches and match them up with belts and ties. Pick up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options.</p>
<p>5.  <span> Fun and frolic -  </span>  Online shopping for kids at Myntra is a complete joy. Your little princess is going to love the wide variety of pretty dresses, ballerina shoes, headbands and clips. Delight your son by picking up sports shoes, superhero T-shirts, football jerseys and much more from our online store. Check out our lineup of toys with which you can create memories to cherish.</p>
<p>6.  <span> Beauty begins hespan</span> You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and grooming products from Myntra. Our soaps, shower gels, skin care creams, lotions and other ayurvedic products are specially formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your hair uber-stylish with shampoos and hair care products. Choose makeup to enhance your natural beauty.</p>

</div>
<p>Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</p>
</div>

<div class="AFF">
<h4>AFFORDABLE FASHION AT YOUR FINGERTIPS</h4>
<p>Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.</p>
<h4>MYNTRA INSIDER</h4>
<p>Every online shopping experience is precious. Hence, a cashless reward-based customer loyalty program called Myntra Insider was introduced to enhance your online experience. The program is applicable to every registered customer and measures rewards in the form of Insider Points.</p>

<p>There are four levels to achieve in the program, as the Insider Points accumulate. They are - Insider, Select, Elite or Icon. Apart from offering discounts on Myntra and partner platform coupons, each tier comes with its own special perks.</p>    
</div>
<!--  end here -->
<div id="inside">
<h5>Insider</h5>
<ul>
<li>Opportunity to master any domain in fashion with tips from celebrity stylists at Myntra Masterclass sessions.</li>
<li>Curated collections from celeb stylists.</li>
</ul>

<h5>Elite</h5>
<ul>
<li>VIP access to special sale events such as the End of Reason Sale (EORS) and product launches.</li>
<li>Exclusive early access to Limited Edition products</li>
</ul>

<h5>Icon</h5>
<ul>

<li>Chance to get on guest lists for special events.</li>
</ul>
<h5>Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To Miss Out On</h5>
<p>The world wide web is evolving at a relentless pace, and with an accelerated growth each passing year, there is bound to be an overwhelming surge of online content. It was for this very reason that personalisation of search feeds was proposed as a solution to combat the overload of irrelevant information.</p>
<p>Several social media platforms such as Facebook and Instagram along with various online shopping websites have chosen to help filter content, increasing user engagement, retention and customer loyalty.</p>
<p>Myntra is one such online shopping website that joins the list of platforms that help curate a personalised fashion feed. Named theMyntra Studio, this personalised search feed brings you the latest men and women’s fashion trends, celebrity styles, branded content and daily updates from your favourite fashion labels.</p>
<p>If you are wondering how impactful Myntra Studio can be, we are listing out five perks of having a rich, meaningful, and personalised fashion feed in your life.</p>
</div>
<!--  myntra studion end here -->
<div id="keepUp">
<div>
<h5>1. Keep Up With What Your Favourite Fashion Icons Are Upto</h5>
<p>The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and stylists. The whole concept of building an outfit from scratch and showcasing it to a huge community of enthusiasts using the hashtag has helped individuals with understanding trends and making suitable for daily wear.</p>
<p>Imagine if you could keep up with every piece of clothing and accessory worn by the fashion icons you look upto. From Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’ feature to help track celebrity fashion trends, exploring details such as their outfit of the day. This way, you would not ever miss out on the latest celebrity fashion trends, from all around the world.</p>
<h5>2. Quick Fashion Tip And Tricks</h5>
<p>Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or discovering multiple uses out of heavy ethnic wear, Myntra Studio will help you acquire some unique and useful fashion hacks. Each hack is designed with the intention to help you get the best wear out of everything in your wardrobe.</p>
<h5>3. Updates on What Is Trending and New Product Launches</h5>
<p>Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is trending in accessories, clothing and footwear would certainly be of great help. Myntra Studio helps you stay connected to the most beloved and sought after brands such as Puma, Coverstory, The Label Life and so many more.</p>
<p>Your feed keeps you updated with stories of what the brands are creating including clothing, footwear and jewellery, along with their new seasonal collections.</p>
<h5>4. Explicit Step-By-Step Beauty Routines From Experts</h5>
<p>Just like fashion, the beauty community keeps on growing, and with brands such as Huda Beauty, MAC and the latest Kay Beauty by Katrina Kaif, are constantly coming up with mind-blowing products. Whether it is creating a no-makeup look, different winged eyeliners, do-it-yourself facial masks and other personal care beauty routines, Myntra Studio is here for you.</p>
<h5>5.Celebrity Confessions And A Look Into Their Lives</h5>
<p>A bonus feature that Myntra Studio has in store for you is celebrity confessions and a peek into their lives. So, Myntra helps you stay connected to your most beloved celebrities in a matter of clicks.</p>
<p>If you are very particular when it comes to the content you wish to view and engage with on social media, the ability to intricately filter content helps achieve that. Applying the same formula for hardcore fashion lovers and shoppers, Myntra Studio brings you a daily fashion fix incorporating everything that you love, all at one place. Sign up on Myntra today and start organising your fashion feed, just the way you want to.</p>
</div>

</div>
<div id="myntraApp">
<h4>MYNTRA APP</h4>
<p>Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your Android or IOS device today and experience shopping like never before!</p>
<h4>HISTORY OF MYNTRA</h4>
<p>Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized gifts was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.</p>
<p>The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before</p>
<h4>SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</h4>
<p>Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 30-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level</p>
<p>Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.</p>
</div>`;


document.getElementById("footHead").innerHTML=footer;