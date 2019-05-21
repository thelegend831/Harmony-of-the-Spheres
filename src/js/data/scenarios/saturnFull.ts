export default {
  name: 'The Sun and the Cronian System',
  type: 'Solar System',
  g: 39.5,
  dt: 0.000005,
  rotatingReferenceFrame: 'Saturn',
  cameraPosition: 'Free',
  cameraFocus: 'Origo',
  freeOrigo: {
    x: 4179.634541486797,
    y: 5301.841140561859,
    z: 100.55825363900749
  },
  massBeingModified: 'Saturn',
  distMax: 50,
  distMin: -50,
  primary: 'Saturn',
  maximumDistance: { name: 'Titan to Saturn * 2', value: 0.01633512555 },
  distanceStep: {
    name: 'Titan to Saturn / 200',
    value: 0.000040837813874999996
  },
  scenarioWikiUrl: 'https://en.wikipedia.org/wiki/Saturn',
  particles: {
    max: 20000,
    rings: [
      {
        primary: 'Saturn',
        tilt: [-26.73, 0, 0],
        number: 6500,
        minD: 0.0006749650466666667,
        maxD: 0.00101244757
      }
    ]
  },
  masses: [
    {
      name: 'Saturn',
      x: 1.455395947628908,
      y: -9.949880746961366,
      z: 0.1150689429678489,
      vx: 1.904060271026863,
      vy: 0.2886523546718628,
      vz: -0.08092749245870556,
      trailVertices: 3e3
    },
    {
      name: 'Sun',
      x: -1.135841603717545e-5,
      y: 0.007200805435052814,
      z: -7.608241832106424e-5,
      vx: -0.0027531411153919037,
      vy: 0.0010072803591140611,
      vz: 6.87504175911851e-5,
      trailVertices: 10
    },
    {
      name: 'Titan',
      x: 1.44703665465149,
      y: -9.949586575198328,
      z: 1.157482216777228e-1,
      vx: 5.256858895499312e-3 * 365.25,
      vy: -1.994460185286707e-3 * 365.25,
      vz: 1.209338235284613e-3 * 365.25
    },
    {
      name: 'Enceladus',
      x: 1.4541131533763,
      y: -9.950663717534709,
      z: 1.156038530153486e-1,
      vx: 9.470107612557231e-3 * 365.25,
      vy: -4.597768584760503e-3 * 365.25,
      vz: 2.189410883919595e-3 * 365.25
    },
    {
      name: 'Dione',
      x: 1.457689206685954,
      y: -9.950894099671027,
      z: 1.153788325148113e-1,
      vx: 7.596856632205259e-3 * 365.25,
      vy: 5.359334632327778e-3 * 365.25,
      vz: -2.847559317518564e-3 * 365.25
    },
    {
      name: 'Rhea',
      x: 1.457034907876281,
      y: -9.947177863962436,
      z: 1.135137967303367e-1,
      vx: 8.94899846408525e-4 * 365.25,
      vy: 2.983718150986353e-3 * 365.25,
      vz: -9.704289809250273e-4 * 365.25
    },
    {
      name: 'Mimas',
      x: 1.455334947807255,
      y: -9.948751451380938,
      z: 1.145039405599507e-1,
      vx: -2.873193311868515e-3 * 365.25,
      vy: 7.001959617420825e-4 * 365.25,
      vz: 3.958561574366473e-4 * 365.25
    },
    {
      name: 'Tethys',
      x: 1.453458245783646,
      y: -9.949527298597699,
      z: 1.151060945159009e-1,
      vx: 4.239395169348909e-3 * 365.25,
      vy: -4.877557389618863e-3 * 365.25,
      vz: 2.924515988458875e-3 * 365.25
    },
    {
      name: 'Methone',
      type: 'asteroid',
      orbitalPeriod: 0.002765945205,
      x: 1.454102079560042,
      y: -9.949801986793316,
      z: 1.151532523288807e-1,
      vx: 5.029905852992385e-3 * 365.25,
      vy: -6.35541779600486e-3 * 365.25,
      vz: 3.53916714627585e-3 * 365.25
    },
    {
      name: 'Telesto',
      type: 'asteroid',
      orbitalPeriod: 0.005172060274,
      x: 1.454182170847646,
      y: -9.951191821059926,
      z: 1.158995255743654e-1,
      vx: 1.032956940592694e-2 * 365.25,
      vy: -3.060933004043125e-3 * 365.25,
      vz: 1.174494514630794e-3 * 365.25
    },
    {
      name: 'Calypso',
      type: 'asteroid',
      orbitalPeriod: 0.005172060274,
      x: 1.454758223914872,
      y: -9.948225858342374,
      z: 1.142117815868715e-1,
      vx: -9.62835451945097e-4 * 365.25,
      vy: -7.985254922270925e-4 * 365.25,
      vz: 1.298500053699782e-3 * 365.25
    },
    {
      name: 'Helene',
      type: 'asteroid',
      orbitalPeriod: 0.0074983972603,
      x: 1.457454928756659,
      y: -9.948653829084341,
      z: 1.142198327821264e-1,
      vx: 1.870186282460492e-3 * 365.25,
      vy: 5.0642389098929e-3 * 365.25,
      vz: -2.118660632467462e-3 * 365.25
    },
    {
      name: 'Polydeuces',
      type: 'asteroid',
      orbitalPeriod: 2.736915,
      x: 1.454849473949497,
      y: -9.952065572452565,
      z: 1.162574449207172e-1,
      vx: 1.081917667182839e-2 * 365.25,
      vy: -4.394661827268038e-4 * 365.25,
      vz: -1.177211906588136e-4 * 365.25
    }
  ]
};
