export default {
  name: '1994 Shoemaker-Levy 9 Collision with Jupiter',
  type: 'Solar System',
  g: 39.5,
  dt: 0.000006,
  rotatingReferenceFrame: 'Jupiter',
  labels: false,
  cameraPosition: 'D/1993 F2-W',
  cameraFocus: 'Origo',
  freeOrigo: {
    x: -7480.213284753809,
    y: -8163.220347463112,
    z: 2139.892485956284
  },
  particles: {
    max: 40000,
    size: 400,
    rings: []
  },
  massBeingModified: 'Jupiter',
  distMax: 50,
  distMin: -50,
  primary: 'Jupiter',
  maximumDistance: { name: 'Io to Jupiter * 150', value: 0.42285 },
  distanceStep: { name: 'Io to Jupiter / 10', value: 0.00028189999999999997 },
  scenarioWikiUrl: 'https://en.wikipedia.org/wiki/Comet_Shoemaker%E2%80%93Levy_9',
  masses: [
    {
      name: 'Jupiter',
      x: -3.860609211976613,
      y: -3.795783780034435,
      z: 0.1021785974450456,
      vx: 1.8970375396018628,
      vy: -1.8360798841034267,
      vz: -0.034872603345041275,
      trailVertices: 5e3
    },
    {
      name: 'Sun',
      x: 1.921901559523855e-4,
      y: 0.006933507907670472,
      z: -2.353551685108542e-5,
      vx: -0.0021434089045176143,
      vy: 0.0011844294812730926,
      vz: 5.3379791007876995e-5,
      trailVertices: 5e3
    },
    {
      name: 'Io',
      x: -3.862642331816945,
      y: -3.797745227473326,
      z: 0.1020800262732356,
      vx: 4.422424109746303,
      vy: -4.467509971756542,
      vz: -0.0905606281645549
    },
    {
      name: 'Europa',
      x: -3.864783115573139,
      y: -3.794089768016213,
      z: 0.1021441397599244,
      vx: 0.8358219952648577,
      vy: -4.51842096065633,
      vz: -0.14557946050161813
    },
    {
      name: 'Ganymede',
      x: -3.866365821370271,
      y: -3.800023646141705,
      z: 0.1019645924216719,
      vx: 3.261042654774037,
      vy: -3.6826584937446105,
      vz: -0.0871531614188113
    },
    {
      name: 'Callisto',
      x: -3.860661746185688,
      y: -3.808345541728765,
      z: 0.1017638648464768,
      vx: 3.6300760338895075,
      vy: -1.8319780310078853,
      vz: -0.012032041702627644
    },
    {
      name: 'D/1993 F2-A',
      type: 'asteroid',
      x: -3.872389558928672,
      y: -3.754978396752314,
      z: 0.15197791378893225,
      vx: 2.0902482919699317,
      vy: -2.486827860247388,
      vz: -0.7310642680501839,
      trailVertices: 1e3
    },
    {
      name: 'D/1993 F2-B',
      type: 'asteroid',
      x: -3.872654032259898,
      y: -3.754533628743904,
      z: 0.152516119088249,
      vx: 2.0896840598168525,
      vy: -2.482490838441223,
      vz: -0.7261089958029947,
      trailVertices: 1e3
    },
    {
      name: 'D/1993 F2-C',
      type: 'asteroid',
      x: -3.872583667225978,
      y: -3.754141954419916,
      z: 0.15284033089312343,
      vx: 2.0881276984161214,
      vy: -2.480166940584824,
      vz: -0.7228072386321907,
      trailVertices: 1e3
    },
    {
      name: 'D/1993 F2-D',
      type: 'asteroid',
      x: -3.872687037984398,
      y: -3.753796191709315,
      z: 0.1532072648569226,
      vx: 2.087334053710695,
      vy: -2.4773535165258016,
      vz: -0.7193908784605032,
      trailVertices: 1e3
    },
    {
      name: 'D/1993 F2-E',
      type: 'asteroid',
      x: -3.872741069399913,
      y: -3.753547606084259,
      z: 0.15346519149824206,
      vx: 2.0866910143411905,
      vy: -2.475419012097939,
      vz: -0.7170113786595845,
      trailVertices: 1e3
    },
    {
      name: 'D/1993 F2-F',
      type: 'asteroid',
      x: -3.873042169071823,
      y: -3.752893702326051,
      z: 0.15419621891452898,
      vx: 2.085679175811986,
      vy: -2.469814960918724,
      vz: -0.7104018811100719,
      trailVertices: 1e3
    },
    {
      name: 'D/1993 F2-G',
      type: 'asteroid',
      x: -3.873043796587821,
      y: -3.752340050125547,
      z: 0.15472416932964297,
      vx: 2.083821827097074,
      vy: -2.466099355602231,
      vz: -0.7056258088080103,
      trailVertices: 1e3
    },
    {
      name: 'D/1993 F2-H',
      type: 'asteroid',
      x: -3.873274691741269,
      y: -3.751467341669973,
      z: 0.15562926969595364,
      vx: 2.0818765901132106,
      vy: -2.459563853485977,
      vz: -0.6976459650909331,
      trailVertices: 1e3
    },
    {
      name: 'D/1993 F2-K',
      type: 'asteroid',
      x: -3.873529690697416,
      y: -3.750390536747645,
      z: 0.15674034571531345,
      vx: 2.079462300587857,
      vy: -2.451767640229874,
      vz: -0.6881573430784349,
      trailVertices: 1e3
    },
    {
      name: 'D/1993 F2-L',
      type: 'asteroid',
      x: -3.873742746099896,
      y: -3.74954215549608,
      z: 0.15761568035830054,
      vx: 2.077675101710784,
      vy: -2.445751788895827,
      vz: -0.6808764878828781,
      trailVertices: 1e3
    },
    {
      name: 'D/1993 F2-N',
      type: 'asteroid',
      x: -3.874020450394914,
      y: -3.748687356669117,
      z: 0.15849962879514565,
      vx: 2.076100008643041,
      vy: -2.4397465053315823,
      vz: -0.6735986500074853,
      trailVertices: 1e3
    },
    {
      name: 'D/1993 F2-R',
      type: 'asteroid',
      x: -3.874290423792006,
      y: -3.747344531712526,
      z: 0.15987823646110083,
      vx: 2.0731729779874226,
      vy: -2.4308002291514863,
      vz: -0.6628285944309599,
      trailVertices: 1e3
    },
    {
      name: 'D/1993 F2-S',
      type: 'asteroid',
      x: -3.874478497007658,
      y: -3.746681147577035,
      z: 0.16056646229848492,
      vx: 2.0719264590252573,
      vy: -2.4263873877782163,
      vz: -0.6575556660398322,
      trailVertices: 1e3
    },
    {
      name: 'D/1993 F2-T',
      type: 'asteroid',
      x: -3.874756621069139,
      y: -3.746535088549347,
      z: 0.16076409019744914,
      vx: 2.0722758005191357,
      vy: -2.4249311526984454,
      vz: -0.6559352018350464,
      trailVertices: 1e3
    },
    {
      name: 'D/1993 F2-U',
      type: 'asteroid',
      x: -3.874685161187804,
      y: -3.746244934459729,
      z: 0.1610415701351806,
      vx: 2.0713458224774124,
      vy: -2.4233137641574634,
      vz: -0.6539610513542758,
      trailVertices: 1e3
    },
    {
      name: 'D/1993 F2-V',
      type: 'asteroid',
      x: -3.87478189351105,
      y: -3.745803838491746,
      z: 0.16148857376559814,
      vx: 2.070474187005202,
      vy: -2.420536505154798,
      vz: -0.6506125725745564,
      trailVertices: 1e3
    },
    {
      name: 'D/1993 F2-W',
      type: 'asteroid',
      x: -3.874753378781667,
      y: -3.745529573843972,
      z: 0.161749554349438,
      vx: 2.0697077651325944,
      vy: -2.418993424077559,
      vz: -0.6487210741971164,
      trailVertices: 1e3
    }
  ]
};
