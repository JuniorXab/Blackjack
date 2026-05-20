/**
 * players.js v3 — Album Panini Mundial 2026
 * Base spacing: 20 slots per team (offsets 0-19)
 * Fixed ID conflicts, corrected wiki titles
 */

window.AB_SECTIONS_V2 = [
  {id:'col',name:'Colombia',       flag:'co', base:1000},
  {id:'bra',name:'Brasil',         flag:'br', base:1020},
  {id:'arg',name:'Argentina',      flag:'ar', base:1040},
  {id:'uru',name:'Uruguay',        flag:'uy', base:1060},
  {id:'ecu',name:'Ecuador',        flag:'ec', base:1080},
  {id:'par',name:'Paraguay',       flag:'py', base:1100},
  {id:'mex',name:'México',         flag:'mx', base:1120},
  {id:'usa',name:'USA',            flag:'us', base:1140},
  {id:'can',name:'Canadá',         flag:'ca', base:1160},
  {id:'pan',name:'Panamá',         flag:'pa', base:1180},
  {id:'cos',name:'Costa Rica',     flag:'cr', base:1200},
  {id:'hon',name:'Honduras',       flag:'hn', base:1220},
  {id:'fra',name:'Francia',        flag:'fr', base:1240},
  {id:'esp',name:'España',         flag:'es', base:1260},
  {id:'ale',name:'Alemania',       flag:'de', base:1280},
  {id:'eng',name:'Inglaterra',     flag:'gb-eng', base:1300},
  {id:'por',name:'Portugal',       flag:'pt', base:1320},
  {id:'ita',name:'Italia',         flag:'it', base:1340},
  {id:'hol',name:'Países Bajos',   flag:'nl', base:1360},
  {id:'bel',name:'Bélgica',        flag:'be', base:1380},
  {id:'cro',name:'Croacia',        flag:'hr', base:1400},
  {id:'sui',name:'Suiza',          flag:'ch', base:1420},
  {id:'tur',name:'Turquía',        flag:'tr', base:1440},
  {id:'ser',name:'Serbia',         flag:'rs', base:1460},
  {id:'aus',name:'Austria',        flag:'at', base:1480},
  {id:'esq',name:'Escocia',        flag:'gb-sct', base:1500},
  {id:'hun',name:'Hungría',        flag:'hu', base:1520},
  {id:'geo',name:'Georgia',        flag:'ge', base:1540},
  {id:'mar',name:'Marruecos',      flag:'ma', base:1560},
  {id:'sen',name:'Senegal',        flag:'sn', base:1580},
  {id:'nga',name:'Nigeria',        flag:'ng', base:1600},
  {id:'egy',name:'Egipto',         flag:'eg', base:1620},
  {id:'cmr',name:'Camerún',        flag:'cm', base:1640},
  {id:'jap',name:'Japón',          flag:'jp', base:1660},
  {id:'cor',name:'Corea del Sur',  flag:'kr', base:1680},
  {id:'ira',name:'Irán',           flag:'ir', base:1700},
  {id:'au2',name:'Australia',      flag:'au', base:1720},
  {id:'ara',name:'Arabia Saudita', flag:'sa', base:1740},
];

// [offset, nombre, posicion, rating, wiki_title_correcto]
// offset 0 = Bandera, 1 = Escudo, 2..17 = jugadores
window.AB_PLAYERS_V2 = {
  col:[
    [2, 'Camilo Vargas',       'POR', 78,  'Camilo Vargas (Colombian footballer)'],
    [3, 'Dávinson Sánchez',    'DEF', 83,  'Davinson Sanchez'],
    [4, 'Yerry Mina',          'DEF', 80,  'Yerry Mina'],
    [5, 'Daniel Muñoz',        'LAT', 82,  'Daniel Munoz (footballer)'],
    [6, 'Johan Mojica',        'LAT', 79,  'Johan Mojica'],
    [7, 'Matheus Uribe',       'MED', 79,  'Matheus Uribe'],
    [8, 'Jefferson Lerma',     'MED', 80,  'Jefferson Lerma'],
    [9, 'James Rodríguez',     'MED', 85,  'James Rodriguez (Colombian footballer)'],
    [10,'Luis Díaz',           'DEL', 87,  'Luis Díaz (footballer, born 1997)'],
    [11,'Radamel Falcao',      'DEL', 82,  'Radamel Falcao'],
    [12,'Richard Ríos',        'MED', 81,  'Richard Ríos'],
    [13,'Rafael Santos Borré', 'DEL', 80,  'Rafael Santos Borré'],
    [14,'Jhon Córdoba',        'DEL', 79,  'Jhon Córdoba'],
    [15,'Juan Cuadrado',       'LAT', 81,  'Juan Cuadrado'],
  ],
  bra:[
    [2, 'Alisson Becker',      'POR', 92,  'Alisson Becker'],
    [3, 'Marquinhos',          'DEF', 87,  'Marquinhos (footballer)'],
    [4, 'Éder Militão',        'DEF', 85,  'Éder Militão'],
    [5, 'Danilo',              'LAT', 80,  'Danilo (footballer, born 1991)'],
    [6, 'Renan Lodi',          'LAT', 79,  'Renan Lodi'],
    [7, 'Casemiro',            'MED', 87,  'Casemiro'],
    [8, 'Bruno Guimarães',     'MED', 86,  'Bruno Guimarães'],
    [9, 'Lucas Paquetá',       'MED', 85,  'Lucas Paquetá'],
    [10,'Vinícius Jr.',        'DEL', 94,  'Vinícius Júnior'],
    [11,'Rodrygo',             'DEL', 87,  'Rodrygo'],
    [12,'Raphinha',            'DEL', 86,  'Raphinha'],
    [13,'Endrick',             'DEL', 82,  'Endrick'],
    [14,'Gabriel Martinelli',  'DEL', 84,  'Gabriel Martinelli'],
  ],
  arg:[
    [2, 'Emiliano Martínez',   'POR', 88,  'Emiliano Martínez (goalkeeper)'],
    [3, 'Cristian Romero',     'DEF', 86,  'Cristian Romero'],
    [4, 'Lisandro Martínez',   'DEF', 85,  'Lisandro Martínez'],
    [5, 'Nahuel Molina',       'LAT', 82,  'Nahuel Molina'],
    [6, 'Nicolás Tagliafico',  'LAT', 80,  'Nicolás Tagliafico'],
    [7, 'Rodrigo De Paul',     'MED', 84,  'Rodrigo De Paul'],
    [8, 'Enzo Fernández',      'MED', 85,  'Enzo Fernández (footballer)'],
    [9, 'Alexis Mac Allister', 'MED', 85,  'Alexis Mac Allister'],
    [10,'Lionel Messi',        'DEL', 99,  'Lionel Messi'],
    [11,'Julián Álvarez',      'DEL', 87,  'Julián Álvarez'],
    [12,'Lautaro Martínez',    'DEL', 89,  'Lautaro Martínez'],
    [13,'Paulo Dybala',        'DEL', 85,  'Paulo Dybala'],
  ],
  uru:[
    [2, 'Sergio Rochet',       'POR', 80,  'Sergio Rochet'],
    [3, 'José Giménez',        'DEF', 83,  'José María Giménez'],
    [4, 'Ronald Araújo',       'DEF', 85,  'Ronald Araújo'],
    [5, 'Nahitán Nández',      'LAT', 79,  'Nahitán Nández'],
    [6, 'Mathías Olivera',     'LAT', 80,  'Mathías Olivera'],
    [7, 'Federico Valverde',   'MED', 87,  'Federico Valverde'],
    [8, 'Rodrigo Bentancur',   'MED', 83,  'Rodrigo Bentancur'],
    [9, 'Manuel Ugarte',       'MED', 83,  'Manuel Ugarte (footballer)'],
    [10,'Darwin Núñez',        'DEL', 85,  'Darwin Núñez'],
    [11,'Luis Suárez',         'DEL', 83,  'Luis Suárez'],
    [12,'Facundo Pellistri',   'DEL', 79,  'Facundo Pellistri'],
  ],
  ecu:[
    [2, 'Hernán Galíndez',     'POR', 76,  'Hernán Galíndez'],
    [3, 'Félix Torres',        'DEF', 79,  'Félix Torres (footballer)'],
    [4, 'Piero Hincapié',      'DEF', 82,  'Piero Hincapié'],
    [5, 'Ángelo Preciado',     'LAT', 78,  'Ángelo Preciado'],
    [6, 'Pervis Estupiñán',    'LAT', 83,  'Pervis Estupiñán'],
    [7, 'Moisés Caicedo',      'MED', 86,  'Moisés Caicedo'],
    [8, 'Carlos Gruezo',       'MED', 77,  'Carlos Gruezo'],
    [9, 'Romario Ibarra',      'MED', 77,  'Romario Ibarra'],
    [10,'Enner Valencia',      'DEL', 79,  'Enner Valencia'],
    [11,'Michael Estrada',     'DEL', 76,  'Michael Estrada (footballer)'],
    [12,'Gonzalo Plata',       'DEL', 78,  'Gonzalo Plata'],
  ],
  par:[
    [2, 'Antony Silva',        'POR', 75,  'Antony Silva'],
    [3, 'Gustavo Gómez',       'DEF', 82,  'Gustavo Gómez (footballer)'],
    [4, 'Omar Alderete',       'DEF', 79,  'Omar Alderete'],
    [5, 'Junior Alonso',       'DEF', 78,  'Junior Alonso'],
    [6, 'Santiago Arzamendia', 'LAT', 77,  'Santiago Arzamendia'],
    [7, 'Miguel Almirón',      'MED', 83,  'Miguel Almirón'],
    [8, 'Mathías Villasanti',  'MED', 77,  'Mathías Villasanti'],
    [9, 'Ángel Romero',        'MED', 79,  'Ángel Romero (footballer)'],
    [10,'Antonio Sanabria',    'DEL', 78,  'Antonio Sanabria'],
    [11,'Julio Enciso',        'DEL', 80,  'Julio Enciso'],
    [12,'Alejandro Romero',    'DEL', 76,  'Kaku (footballer)'],
  ],
  mex:[
    [2, 'Guillermo Ochoa',     'POR', 80,  'Guillermo Ochoa'],
    [3, 'César Montes',        'DEF', 79,  'César Montes'],
    [4, 'Johan Vásquez',       'DEF', 78,  'Johan Vásquez'],
    [5, 'Jorge Sánchez',       'LAT', 77,  'Jorge Sánchez (footballer)'],
    [6, 'Jesús Gallardo',      'LAT', 78,  'Jesús Gallardo'],
    [7, 'Edson Álvarez',       'MED', 84,  'Edson Álvarez'],
    [8, 'Héctor Herrera',      'MED', 79,  'Héctor Herrera'],
    [9, 'Hirving Lozano',      'DEL', 82,  'Hirving Lozano'],
    [10,'Raúl Jiménez',        'DEL', 81,  'Raúl Jiménez'],
    [11,'Henry Martín',        'DEL', 78,  'Henry Martín'],
    [12,'Alexis Vega',         'DEL', 77,  'Alexis Vega (footballer)'],
  ],
  usa:[
    [2, 'Matt Turner',         'POR', 79,  'Matt Turner (soccer)'],
    [3, 'Chris Richards',      'DEF', 78,  'Chris Richards (soccer)'],
    [4, 'Miles Robinson',      'DEF', 77,  'Miles Robinson (soccer)'],
    [5, 'Sergiño Dest',        'LAT', 80,  'Sergiño Dest'],
    [6, 'Antonee Robinson',    'LAT', 81,  'Antonee Robinson'],
    [7, 'Weston McKennie',     'MED', 82,  'Weston McKennie'],
    [8, 'Tyler Adams',         'MED', 82,  'Tyler Adams (soccer)'],
    [9, 'Yunus Musah',         'MED', 81,  'Yunus Musah'],
    [10,'Christian Pulisic',   'DEL', 83,  'Christian Pulisic'],
    [11,'Folarin Balogun',     'DEL', 79,  'Folarin Balogun'],
    [12,'Giovanni Reyna',      'DEL', 79,  'Giovanni Reyna'],
  ],
  can:[
    [2, 'Maxime Crépeauaux',   'POR', 77,  'Maxime Crépeau'],
    [3, 'Kamal Miller',        'DEF', 77,  'Kamal Miller'],
    [4, 'Steven Vitoria',      'DEF', 76,  'Steven Vitória'],
    [5, 'Richie Laryea',       'LAT', 77,  'Richie Laryea'],
    [6, 'Alphonso Davies',     'LAT', 87,  'Alphonso Davies'],
    [7, 'Atiba Hutchinson',    'MED', 78,  'Atiba Hutchinson'],
    [8, 'Stephen Eustáquio',   'MED', 79,  'Stephen Eustáquio'],
    [9, 'Jonathan David',      'DEL', 84,  'Jonathan David (soccer)'],
    [10,'Cyle Larin',          'DEL', 78,  'Cyle Larin'],
    [11,'Tajon Buchanan',      'DEL', 79,  'Tajon Buchanan'],
    [12,'Lucas Cavallini',     'DEL', 75,  'Lucas Cavallini'],
  ],
  pan:[
    [2, 'Luis Mejía',          'POR', 75,  'Luis Mejía (footballer)'],
    [3, 'Fidel Escobar',       'DEF', 75,  'Fidel Escobar'],
    [4, 'Roderick Miller',     'DEF', 74,  'Roderick Miller (footballer)'],
    [5, 'Michael Murillo',     'LAT', 76,  'Michael Murillo'],
    [6, 'Adalberto Carrasquilla','MED',76, 'Adalberto Carrasquilla'],
    [7, 'Armando Cooper',      'MED', 74,  'Armando Cooper'],
    [8, 'Edgar Bárcenas',      'MED', 75,  'Edgar Bárcenas'],
    [9, 'Rolando Blackburn',   'DEL', 74,  'Rolando Blackburn'],
    [10,'Ismael Díaz',         'DEL', 76,  'Ismael Díaz (footballer)'],
    [11,'Cecilio Waterman',    'DEL', 75,  'Cecilio Waterman'],
    [12,'Gabriel Torres',      'DEL', 74,  'Gabriel Torres (footballer, born 1988)'],
  ],
  cos:[
    [2, 'Keylor Navas',        'POR', 84,  'Keylor Navas'],
    [3, 'Francisco Calvo',     'DEF', 77,  'Francisco Calvo (footballer)'],
    [4, 'Bryan Oviedo',        'LAT', 76,  'Bryan Oviedo'],
    [5, 'Keysher Fuller',      'LAT', 77,  'Keysher Fuller'],
    [6, 'Yeltsin Tejeda',      'MED', 76,  'Yeltsin Tejeda'],
    [7, 'Celso Borges',        'MED', 77,  'Celso Borges'],
    [8, 'Joel Campbell',       'DEL', 79,  'Joel Campbell'],
    [9, 'Alonso Martínez',     'DEL', 76,  'Alonso Martínez (footballer)'],
    [10,'Bryan Ruiz',          'MED', 76,  'Bryan Ruiz'],
    [11,'Anthony Contreras',   'DEL', 75,  'Anthony Contreras (footballer)'],
    [12,'Johan Venegas',       'DEL', 74,  'Johan Venegas'],
  ],
  hon:[
    [2, 'Luis López',          'POR', 73,  'Luis López (Honduran footballer)'],
    [3, 'Denil Maldonado',     'DEF', 74,  'Denil Maldonado'],
    [4, 'Maynor Figueroa',     'DEF', 72,  'Maynor Figueroa'],
    [5, 'Marcelo Santos',      'DEF', 73,  'Marcelo Santos (footballer)'],
    [6, 'Alberth Elis',        'MED', 77,  'Alberth Elis'],
    [7, 'Romell Quioto',       'MED', 76,  'Romell Quioto'],
    [8, 'Antony Lozano',       'DEL', 76,  'Antony Lozano'],
    [9, 'Jerry Bengtson',      'DEL', 74,  'Jerry Bengtson'],
    [10,'Rigoberto Rivas',     'DEL', 74,  'Rigoberto Rivas'],
    [11,'Jonathan Rubio',      'DEL', 73,  'Jonathan Rubio (footballer)'],
    [12,'Bryan Acosta',        'MED', 75,  'Bryan Acosta'],
  ],
  fra:[
    [2, 'Mike Maignan',        'POR', 87,  'Mike Maignan'],
    [3, 'William Saliba',      'DEF', 87,  'William Saliba'],
    [4, 'Dayot Upamecano',     'DEF', 85,  'Dayot Upamecano'],
    [5, 'Jules Koundé',        'LAT', 85,  'Jules Koundé'],
    [6, 'Theo Hernández',      'LAT', 85,  'Theo Hernández'],
    [7, 'Aurélien Tchouaméni', 'MED', 85,  'Aurélien Tchouaméni'],
    [8, 'Adrien Rabiot',       'MED', 82,  'Adrien Rabiot'],
    [9, 'Antoine Griezmann',   'MED', 88,  'Antoine Griezmann'],
    [10,'Kylian Mbappé',       'DEL', 97,  'Kylian Mbappé'],
    [11,'Ousmane Dembélé',     'DEL', 87,  'Ousmane Dembélé'],
    [12,'Marcus Thuram',       'DEL', 85,  'Marcus Thuram'],
    [13,'Eduardo Camavinga',   'MED', 86,  'Eduardo Camavinga'],
  ],
  esp:[
    [2, 'Unai Simón',          'POR', 83,  'Unai Simón'],
    [3, 'Robin Le Normand',    'DEF', 82,  'Robin Le Normand'],
    [4, 'Aymeric Laporte',     'DEF', 83,  'Aymeric Laporte'],
    [5, 'Dani Carvajal',       'LAT', 84,  'Dani Carvajal'],
    [6, 'Alejandro Grimaldo',  'LAT', 83,  'Alejandro Grimaldo'],
    [7, 'Rodri',               'MED', 92,  'Rodrigo Hernández Cascante'],
    [8, 'Pedri',               'MED', 89,  'Pedri'],
    [9, 'Gavi',                'MED', 87,  'Gavi (footballer)'],
    [10,'Lamine Yamal',        'DEL', 87,  'Lamine Yamal'],
    [11,'Álvaro Morata',       'DEL', 83,  'Álvaro Morata'],
    [12,'Nico Williams',       'DEL', 85,  'Nico Williams (footballer)'],
    [13,'Dani Olmo',           'MED', 85,  'Dani Olmo'],
  ],
  ale:[
    [2, 'Manuel Neuer',        'POR', 85,  'Manuel Neuer'],
    [3, 'Antonio Rüdiger',     'DEF', 87,  'Antonio Rüdiger'],
    [4, 'Jonathan Tah',        'DEF', 82,  'Jonathan Tah'],
    [5, 'Joshua Kimmich',      'MED', 87,  'Joshua Kimmich'],
    [6, 'David Raum',          'LAT', 81,  'David Raum'],
    [7, 'Leon Goretzka',       'MED', 83,  'Leon Goretzka'],
    [8, 'Jamal Musiala',       'MED', 89,  'Jamal Musiala'],
    [9, 'Florian Wirtz',       'DEL', 88,  'Florian Wirtz'],
    [10,'Leroy Sané',          'DEL', 85,  'Leroy Sané'],
    [11,'Thomas Müller',       'DEL', 83,  'Thomas Müller'],
    [12,'Kai Havertz',         'DEL', 85,  'Kai Havertz'],
    [13,'Benjamin Pavard',     'LAT', 82,  'Benjamin Pavard'],
  ],
  eng:[
    [2, 'Jordan Pickford',     'POR', 82,  'Jordan Pickford'],
    [3, 'John Stones',         'DEF', 83,  'John Stones'],
    [4, 'Harry Maguire',       'DEF', 79,  'Harry Maguire'],
    [5, 'Trent Alexander-Arnold','LAT',87, 'Trent Alexander-Arnold'],
    [6, 'Luke Shaw',           'LAT', 81,  'Luke Shaw'],
    [7, 'Declan Rice',         'MED', 86,  'Declan Rice'],
    [8, 'Jude Bellingham',     'MED', 91,  'Jude Bellingham'],
    [9, 'Phil Foden',          'MED', 87,  'Phil Foden'],
    [10,'Harry Kane',          'DEL', 91,  'Harry Kane'],
    [11,'Bukayo Saka',         'DEL', 87,  'Bukayo Saka'],
    [12,'Marcus Rashford',     'DEL', 84,  'Marcus Rashford'],
    [13,'Cole Palmer',         'MED', 85,  'Cole Palmer'],
  ],
  por:[
    [2, 'Diogo Costa',         'POR', 82,  'Diogo Costa'],
    [3, 'Rúben Dias',          'DEF', 88,  'Rúben Dias'],
    [4, 'Pepe',                'DEF', 80,  'Pepe (footballer, born 1983)'],
    [5, 'João Cancelo',        'LAT', 85,  'João Cancelo'],
    [6, 'Nuno Mendes',         'LAT', 83,  'Nuno Mendes'],
    [7, 'Vitinha',             'MED', 84,  'Vitinha (Portuguese footballer)'],
    [8, 'Bruno Fernandes',     'MED', 88,  'Bruno Fernandes (midfielder)'],
    [9, 'Bernardo Silva',      'MED', 87,  'Bernardo Silva'],
    [10,'Cristiano Ronaldo',   'DEL', 92,  'Cristiano Ronaldo'],
    [11,'Rafael Leão',         'DEL', 86,  'Rafael Leão'],
    [12,'Gonçalo Ramos',       'DEL', 83,  'Gonçalo Ramos'],
    [13,'João Félix',          'DEL', 84,  'João Félix'],
  ],
  ita:[
    [2, 'Gianluigi Donnarumma','POR', 88,  'Gianluigi Donnarumma'],
    [3, 'Alessandro Bastoni',  'DEF', 86,  'Alessandro Bastoni'],
    [4, 'Leonardo Bonucci',    'DEF', 79,  'Leonardo Bonucci'],
    [5, 'Giovanni Di Lorenzo', 'LAT', 82,  'Giovanni Di Lorenzo'],
    [6, 'Federico Dimarco',    'LAT', 83,  'Federico Dimarco'],
    [7, 'Nicolò Barella',      'MED', 86,  'Nicolò Barella'],
    [8, 'Marco Verratti',      'MED', 84,  'Marco Verratti'],
    [9, 'Lorenzo Pellegrini',  'MED', 82,  'Lorenzo Pellegrini'],
    [10,'Federico Chiesa',     'DEL', 84,  'Federico Chiesa'],
    [11,'Ciro Immobile',       'DEL', 83,  'Ciro Immobile'],
    [12,'Giacomo Raspadori',   'DEL', 80,  'Giacomo Raspadori'],
  ],
  hol:[
    [2, 'Bart Verbruggen',     'POR', 80,  'Bart Verbruggen'],
    [3, 'Virgil van Dijk',     'DEF', 88,  'Virgil van Dijk'],
    [4, 'Matthijs de Ligt',    'DEF', 85,  'Matthijs de Ligt'],
    [5, 'Denzel Dumfries',     'LAT', 83,  'Denzel Dumfries'],
    [6, 'Nathan Aké',          'DEF', 82,  'Nathan Aké'],
    [7, 'Frenkie de Jong',     'MED', 86,  'Frenkie de Jong'],
    [8, 'Tijjani Reijnders',   'MED', 83,  'Tijjani Reijnders'],
    [9, 'Xavi Simons',         'MED', 84,  'Xavi Simons'],
    [10,'Memphis Depay',       'DEL', 83,  'Memphis Depay'],
    [11,'Donyell Malen',       'DEL', 81,  'Donyell Malen'],
    [12,'Wout Weghorst',       'DEL', 79,  'Wout Weghorst'],
  ],
  bel:[
    [2, 'Koen Casteels',       'POR', 82,  'Koen Casteels'],
    [3, 'Toby Alderweireld',   'DEF', 80,  'Toby Alderweireld'],
    [4, 'Jan Vertonghen',      'DEF', 79,  'Jan Vertonghen'],
    [5, 'Thomas Meunier',      'LAT', 79,  'Thomas Meunier'],
    [6, 'Yannick Carrasco',    'LAT', 80,  'Yannick Carrasco'],
    [7, 'Kevin De Bruyne',     'MED', 91,  'Kevin De Bruyne'],
    [8, 'Axel Witsel',         'MED', 80,  'Axel Witsel'],
    [9, 'Youri Tielemans',     'MED', 82,  'Youri Tielemans'],
    [10,'Romelu Lukaku',       'DEL', 84,  'Romelu Lukaku'],
    [11,'Dries Mertens',       'DEL', 81,  'Dries Mertens'],
    [12,'Leandro Trossard',    'DEL', 82,  'Leandro Trossard'],
  ],
  cro:[
    [2, 'Dominik Livaković',   'POR', 83,  'Dominik Livaković'],
    [3, 'Dejan Lovren',        'DEF', 79,  'Dejan Lovren'],
    [4, 'Joško Gvardiol',      'DEF', 86,  'Joško Gvardiol'],
    [5, 'Josip Juranović',     'LAT', 79,  'Josip Juranović'],
    [6, 'Borna Sosa',          'LAT', 79,  'Borna Sosa'],
    [7, 'Luka Modrić',         'MED', 87,  'Luka Modrić'],
    [8, 'Mateo Kovačič',       'MED', 84,  'Mateo Kovačić'],
    [9, 'Marcelo Brozović',    'MED', 83,  'Marcelo Brozović'],
    [10,'Ivan Perišić',        'DEL', 82,  'Ivan Perišić'],
    [11,'Ante Budimir',        'DEL', 78,  'Ante Budimir'],
    [12,'Andrej Kramarić',     'DEL', 82,  'Andrej Kramarić'],
  ],
  sui:[
    [2, 'Yann Sommer',         'POR', 83,  'Yann Sommer'],
    [3, 'Manuel Akanji',       'DEF', 84,  'Manuel Akanji'],
    [4, 'Fabian Schär',        'DEF', 82,  'Fabian Schär'],
    [5, 'Silvan Widmer',       'LAT', 79,  'Silvan Widmer'],
    [6, 'Ricardo Rodríguez',   'LAT', 79,  'Ricardo Rodríguez (footballer, born 1992)'],
    [7, 'Granit Xhaka',        'MED', 83,  'Granit Xhaka'],
    [8, 'Remo Freuler',        'MED', 80,  'Remo Freuler'],
    [9, 'Xherdan Shaqiri',     'MED', 80,  'Xherdan Shaqiri'],
    [10,'Breel Embolo',        'DEL', 81,  'Breel Embolo'],
    [11,'Noah Okafor',         'DEL', 80,  'Noah Okafor'],
    [12,'Ruben Vargas',        'DEL', 78,  'Ruben Vargas (Swiss footballer)'],
  ],
  tur:[
    [2, 'Altay Bayındır',      'POR', 79,  'Altay Bayındır'],
    [3, 'Merih Demiral',       'DEF', 82,  'Merih Demiral'],
    [4, 'Samet Akaydin',       'DEF', 79,  'Samet Akaydin'],
    [5, 'Zeki Çelik',          'LAT', 80,  'Zeki Çelik'],
    [6, 'Ferdi Kadıoğlu',      'LAT', 81,  'Ferdi Kadıoğlu'],
    [7, 'Hakan Çalhanoğlu',    'MED', 85,  'Hakan Çalhanoğlu'],
    [8, 'Arda Güler',          'MED', 83,  'Arda Güler'],
    [9, 'Kenan Yıldız',        'DEL', 82,  'Kenan Yıldız'],
    [10,'Burak Yılmaz',        'DEL', 79,  'Burak Yılmaz'],
    [11,'Cenk Tosun',          'DEL', 78,  'Cenk Tosun'],
    [12,'Baris Alper Yilmaz',  'DEL', 80,  'Barış Alper Yılmaz'],
  ],
  ser:[
    [2, 'Predrag Rajković',    'POR', 80,  'Predrag Rajković'],
    [3, 'Nikola Milenković',   'DEF', 81,  'Nikola Milenković'],
    [4, 'Dušan Tadić',         'MED', 83,  'Dušan Tadić'],
    [5, 'Filip Mladenović',    'LAT', 76,  'Filip Mladenović'],
    [6, 'Sergej Milinković-Savić','MED',86,'Sergej Milinković-Savić'],
    [7, 'Nemanja Maksimović',  'MED', 79,  'Nemanja Maksimović'],
    [8, 'Saša Lukić',          'MED', 78,  'Saša Lukić'],
    [9, 'Dušan Vlahović',      'DEL', 85,  'Dušan Vlahović'],
    [10,'Luka Jović',          'DEL', 80,  'Luka Jović'],
    [11,'Aleksandar Mitrović', 'DEL', 83,  'Aleksandar Mitrović'],
    [12,'Filip Kostic',        'LAT', 81,  'Filip Kostić'],
  ],
  aus:[
    [2, 'Patrick Pentz',       'POR', 77,  'Patrick Pentz'],
    [3, 'Kevin Danso',         'DEF', 81,  'Kevin Danso'],
    [4, 'Gernot Trauner',      'DEF', 79,  'Gernot Trauner'],
    [5, 'Stefan Posch',        'LAT', 78,  'Stefan Posch'],
    [6, 'Nicolas Seiwald',     'MED', 80,  'Nicolas Seiwald'],
    [7, 'Florian Grillitsch',  'MED', 79,  'Florian Grillitsch'],
    [8, 'Christoph Baumgartner','MED',80,  'Christoph Baumgartner'],
    [9, 'Marko Arnautović',    'DEL', 80,  'Marko Arnautović'],
    [10,'Michael Gregoritsch', 'DEL', 78,  'Michael Gregoritsch'],
    [11,'Sasa Kalajdzic',      'DEL', 77,  'Saša Kalajdžić'],
    [12,'Marcel Sabitzer',     'MED', 82,  'Marcel Sabitzer'],
  ],
  esq:[
    [2, 'Craig Gordon',        'POR', 78,  'Craig Gordon'],
    [3, 'Grant Hanley',        'DEF', 77,  'Grant Hanley'],
    [4, 'Scott McKenna',       'DEF', 77,  'Scott McKenna'],
    [5, 'Aaron Hickey',        'LAT', 79,  'Aaron Hickey'],
    [6, 'Andy Robertson',      'LAT', 86,  'Andy Robertson'],
    [7, 'Callum McGregor',     'MED', 80,  'Callum McGregor'],
    [8, 'Scott McTominay',     'MED', 81,  'Scott McTominay'],
    [9, 'Ryan Christie',       'MED', 78,  'Ryan Christie (footballer, born 1995)'],
    [10,'Lyndon Dykes',        'DEL', 76,  'Lyndon Dykes'],
    [11,'Ryan Fraser',         'DEL', 77,  'Ryan Fraser'],
    [12,'Lawrence Shankland',  'DEL', 77,  'Lawrence Shankland'],
  ],
  hun:[
    [2, 'Péter Gulácsi',       'POR', 80,  'Péter Gulácsi'],
    [3, 'Willi Orbán',         'DEF', 79,  'Willi Orbán'],
    [4, 'Attila Fiola',        'LAT', 76,  'Attila Fiola'],
    [5, 'Zsolt Nagy',          'LAT', 75,  'Zsolt Nagy (footballer)'],
    [6, 'Ádám Nagy',           'MED', 78,  'Ádám Nagy'],
    [7, 'Dominik Szoboszlai',  'MED', 85,  'Dominik Szoboszlai'],
    [8, 'Roland Sallai',       'MED', 79,  'Roland Sallai'],
    [9, 'Barnabás Varga',      'DEL', 80,  'Barnabás Varga (footballer)'],
    [10,'Kevin Csoboth',       'DEL', 76,  'Kevin Csoboth'],
    [11,'Ádám Szalai',         'DEL', 77,  'Ádám Szalai'],
    [12,'Martin Adam',         'DEL', 75,  'Martin Ádám'],
  ],
  geo:[
    [2, 'Giorgi Mamardashvili','POR', 82,  'Giorgi Mamardashvili'],
    [3, 'Guram Kashia',        'DEF', 75,  'Guram Kashia'],
    [4, 'Solomon Kverkvelia',  'DEF', 76,  'Solomon Kverkvelia'],
    [5, 'Lasha Dvali',         'DEF', 75,  'Lasha Dvali'],
    [6, 'Giorgi Chakvetadze',  'MED', 77,  'Giorgi Chakvetadze'],
    [7, 'Tornike Okriashvili', 'MED', 77,  'Tornike Okriashvili'],
    [8, 'Otar Kiteishvili',    'MED', 76,  'Otar Kiteishvili'],
    [9, 'Khvicha Kvaratskhelia','DEL',88,  'Khvicha Kvaratskhelia'],
    [10,'Georges Mikautadze',  'DEL', 80,  'Georges Mikautadze'],
    [11,'Zuriko Davitashvili', 'DEL', 77,  'Zuriko Davitashvili'],
    [12,'Levan Shengelia',     'DEL', 76,  'Levan Shengelia'],
  ],
  mar:[
    [2, 'Yassine Bounou',      'POR', 85,  'Yassine Bounou'],
    [3, 'Nayef Aguerd',        'DEF', 82,  'Nayef Aguerd'],
    [4, 'Romain Saïss',        'DEF', 80,  'Romain Saïss'],
    [5, 'Achraf Hakimi',       'LAT', 87,  'Achraf Hakimi'],
    [6, 'Noussair Mazraoui',   'LAT', 82,  'Noussair Mazraoui'],
    [7, 'Sofyan Amrabat',      'MED', 83,  'Sofyan Amrabat'],
    [8, 'Azzedine Ounahi',     'MED', 80,  'Azzedine Ounahi'],
    [9, 'Hakim Ziyech',        'MED', 83,  'Hakim Ziyech'],
    [10,'Youssef En-Nesyri',   'DEL', 83,  'Youssef En-Nesyri'],
    [11,'Sofiane Boufal',      'DEL', 80,  'Sofiane Boufal'],
    [12,'Munir El Haddadi',    'DEL', 79,  'Munir El Haddadi'],
  ],
  sen:[
    [2, 'Édouard Mendy',       'POR', 83,  'Édouard Mendy'],
    [3, 'Kalidou Koulibaly',   'DEF', 85,  'Kalidou Koulibaly'],
    [4, 'Abdou Diallo',        'DEF', 79,  'Abdou Diallo'],
    [5, 'Moussa Wagué',        'LAT', 77,  'Moussa Wagué'],
    [6, 'Saliou Ciss',         'LAT', 75,  'Saliou Ciss'],
    [7, 'Idrissa Gueye',       'MED', 81,  'Idrissa Gana Gueye'],
    [8, 'Cheikhou Kouyaté',    'MED', 79,  'Cheikhou Kouyaté'],
    [9, 'Pape Matar Sarr',     'MED', 81,  'Pape Matar Sarr'],
    [10,'Sadio Mané',          'DEL', 86,  'Sadio Mané'],
    [11,'Ismaïla Sarr',        'DEL', 81,  'Ismaïla Sarr'],
    [12,'Bamba Dieng',         'DEL', 78,  'Bamba Dieng'],
  ],
  nga:[
    [2, 'Francis Uzoho',       'POR', 76,  'Francis Uzoho'],
    [3, 'William Troost-Ekong','DEF', 80,  'William Troost-Ekong'],
    [4, 'Kenneth Omeruo',      'DEF', 78,  'Kenneth Omeruo'],
    [5, 'Ola Aina',            'LAT', 79,  'Ola Aina'],
    [6, 'Zaidu Sanusi',        'LAT', 78,  'Zaidu Sanusi'],
    [7, 'Wilfred Ndidi',       'MED', 82,  'Wilfred Ndidi'],
    [8, 'Alex Iwobi',          'MED', 81,  'Alex Iwobi'],
    [9, 'Joe Aribo',           'MED', 79,  'Joe Aribo'],
    [10,'Victor Osimhen',      'DEL', 88,  'Victor Osimhen'],
    [11,'Kelechi Iheanacho',   'DEL', 79,  'Kelechi Iheanacho'],
    [12,'Ademola Lookman',     'DEL', 83,  'Ademola Lookman'],
  ],
  egy:[
    [2, 'Mohamed El Shenawy',  'POR', 78,  'Mohamed El Shenawy'],
    [3, 'Ahmed Hegazi',        'DEF', 79,  'Ahmed Hegazy'],
    [4, 'Omar Gaber',          'DEF', 77,  'Omar Gaber'],
    [5, 'Mohamed Elneny',      'MED', 79,  'Mohamed Elneny'],
    [6, 'Tarek Hamed',         'MED', 76,  'Tarek Hamed'],
    [7, 'Emam Ashour',         'MED', 77,  'Emam Ashour'],
    [8, 'Mahmoud Trezeguet',   'MED', 78,  'Mahmoud Trezeguet'],
    [9, 'Mohamed Salah',       'DEL', 91,  'Mohamed Salah'],
    [10,'Mostafa Mohamed',     'DEL', 78,  'Mostafa Mohamed (footballer)'],
    [11,'Omar Marmoush',       'DEL', 82,  'Omar Marmoush'],
    [12,'Marwan Hamdy',        'DEL', 75,  'Marwan Hamdy'],
  ],
  cmr:[
    [2, 'André Onana',         'POR', 85,  'André Onana'],
    [3, 'Michael Ngadeu',      'DEF', 78,  'Michael Ngadeu-Ngadjui'],
    [4, 'Nicolas Nkoulou',     'DEF', 79,  'Nicolas Nkoulou'],
    [5, 'Collins Fai',         'LAT', 76,  'Collins Fai'],
    [6, 'Harold Moukoudi',     'DEF', 76,  'Harold Moukoudi'],
    [7, 'Zambo Anguissa',      'MED', 83,  'André-Frank Zambo Anguissa'],
    [8, 'Jean-Pierre Nsame',   'DEL', 78,  'Jean-Pierre Nsame'],
    [9, 'Vincent Aboubakar',   'DEL', 81,  'Vincent Aboubakar'],
    [10,'Karl Toko Ekambi',    'DEL', 80,  'Karl Toko Ekambi'],
    [11,'Choupo-Moting',       'DEL', 78,  'Eric Maxim Choupo-Moting'],
    [12,'Gaëtan Bong',         'LAT', 74,  'Gaëtan Bong'],
  ],
  jap:[
    [2, 'Shuichi Gonda',       'POR', 80,  'Shuichi Gonda'],
    [3, 'Maya Yoshida',        'DEF', 78,  'Maya Yoshida'],
    [4, 'Kō Itakura',          'DEF', 80,  'Kō Itakura'],
    [5, 'Hiroki Sakai',        'LAT', 79,  'Hiroki Sakai'],
    [6, 'Yuto Nagatomo',       'LAT', 78,  'Yuto Nagatomo'],
    [7, 'Wataru Endo',         'MED', 82,  'Wataru Endō'],
    [8, 'Daichi Kamada',       'MED', 82,  'Daichi Kamada'],
    [9, 'Ao Tanaka',           'MED', 79,  'Ao Tanaka'],
    [10,'Takumi Minamino',     'DEL', 80,  'Takumi Minamino'],
    [11,'Ritsu Dōan',          'DEL', 80,  'Ritsu Dōan'],
    [12,'Kaoru Mitoma',        'DEL', 82,  'Kaoru Mitoma'],
    [13,'Takefusa Kubo',       'DEL', 84,  'Takefusa Kubo'],
  ],
  cor:[
    [2, 'Kim Seung-gyu',       'POR', 78,  'Kim Seung-gyu'],
    [3, 'Kim Min-jae',         'DEF', 86,  'Kim Min-jae'],
    [4, 'Kim Young-gwon',      'DEF', 77,  'Kim Young-gwon'],
    [5, 'Kim Jin-su',          'LAT', 77,  'Kim Jin-su'],
    [6, 'Jung Woo-young',      'MED', 78,  'Jung Woo-young'],
    [7, 'Hwang In-beom',       'MED', 79,  'Hwang In-beom'],
    [8, 'Lee Jae-sung',        'MED', 79,  'Lee Jae-sung'],
    [9, 'Son Heung-min',       'DEL', 88,  'Son Heung-min'],
    [10,'Hwang Hee-chan',      'DEL', 80,  'Hwang Hee-chan'],
    [11,'Cho Gue-sung',        'DEL', 78,  'Cho Gue-sung'],
    [12,'Lee Kang-in',         'MED', 83,  'Lee Kang-in'],
  ],
  ira:[
    [2, 'Alireza Beiranvand',  'POR', 79,  'Alireza Beiranvand'],
    [3, 'Morteza Pouraliganji','DEF', 78,  'Morteza Pouraliganji'],
    [4, 'Majid Hosseini',      'DEF', 77,  'Majid Hosseini'],
    [5, 'Ehsan Hajsafi',       'LAT', 78,  'Ehsan Hajsafi'],
    [6, 'Sadegh Moharrami',    'LAT', 76,  'Sadegh Moharrami'],
    [7, 'Saeid Ezatolahi',     'MED', 78,  'Saeid Ezatolahi'],
    [8, 'Ali Gholizadeh',      'MED', 77,  'Ali Gholizadeh'],
    [9, 'Ahmad Nourollahi',    'MED', 76,  'Ahmad Nourollahi'],
    [10,'Mehdi Taremi',        'DEL', 83,  'Mehdi Taremi'],
    [11,'Sardar Azmoun',       'DEL', 82,  'Sardar Azmoun'],
    [12,'Karim Ansarifard',    'DEL', 77,  'Karim Ansarifard'],
  ],
  au2:[
    [2, 'Mat Ryan',            'POR', 80,  'Mat Ryan'],
    [3, 'Harry Souttar',       'DEF', 81,  'Harry Souttar'],
    [4, 'Trent Sainsbury',     'DEF', 77,  'Trent Sainsbury'],
    [5, 'Nathaniel Atkinson',  'LAT', 76,  'Nathaniel Atkinson'],
    [6, 'Aziz Behich',         'LAT', 76,  'Aziz Behich'],
    [7, 'Aaron Mooy',          'MED', 80,  'Aaron Mooy'],
    [8, 'Riley McGree',        'MED', 78,  'Riley McGree'],
    [9, 'Jackson Irvine',      'MED', 78,  'Jackson Irvine'],
    [10,'Mathew Leckie',       'DEL', 78,  'Mathew Leckie'],
    [11,'Mitchell Duke',       'DEL', 76,  'Mitchell Duke (footballer)'],
    [12,'Craig Goodwin',       'DEL', 76,  'Craig Goodwin'],
  ],
  ara:[
    [2, 'Mohammed Al-Owais',   'POR', 79,  'Mohammed Al-Owais'],
    [3, 'Ali Al-Bulayhi',      'LAT', 76,  'Ali Al-Bulayhi'],
    [4, 'Abdulelah Al-Amri',   'DEF', 76,  'Abdulelah Al-Amri'],
    [5, 'Yasser Al-Shahrani',  'LAT', 77,  'Yasser Al-Shahrani'],
    [6, 'Mohamed Kanno',       'MED', 77,  'Mohammed Kanno'],
    [7, 'Salem Al-Dawsari',    'MED', 79,  'Salem Al-Dawsari'],
    [8, 'Firas Al-Buraikan',   'DEL', 77,  'Firas Al-Buraikan'],
    [9, 'Saleh Al-Shehri',     'DEL', 77,  'Saleh Al-Shehri'],
    [10,'Hattab Al-Tambakti',  'DEF', 75,  'Hattab Al-Tambakti'],
    [11,'Sami Al-Najei',       'MED', 75,  'Sami Al-Najei'],
    [12,'Nawaf Al-Abed',       'MED', 74,  'Nawaf Al-Abed'],
  ],
};

// ── Build AB_SECTIONS, AB_STICKERS, AB_WIKI_MAP ─────────────
(function buildAlbumV2() {
  var EMOJIS = {
    'co':'🇨🇴','br':'🇧🇷','ar':'🇦🇷','uy':'🇺🇾','ec':'🇪🇨','py':'🇵🇾',
    'mx':'🇲🇽','us':'🇺🇸','ca':'🇨🇦','pa':'🇵🇦','cr':'🇨🇷','hn':'🇭🇳',
    'fr':'🇫🇷','es':'🇪🇸','de':'🇩🇪','gb-eng':'🏴󠁧󠁢󠁥󠁮󠁧󠁿','pt':'🇵🇹','it':'🇮🇹',
    'nl':'🇳🇱','be':'🇧🇪','hr':'🇭🇷','ch':'🇨🇭','tr':'🇹🇷','rs':'🇷🇸',
    'at':'🇦🇹','gb-sct':'🏴󠁧󠁢󠁳󠁣󠁴󠁿','hu':'🇭🇺','ge':'🇬🇪',
    'ma':'🇲🇦','sn':'🇸🇳','ng':'🇳🇬','eg':'🇪🇬','cm':'🇨🇲',
    'jp':'🇯🇵','kr':'🇰🇷','ir':'🇮🇷','au':'🇦🇺','sa':'🇸🇦',
  };

  var sections = [], stickers = [], wikiMap = {};
  if (!window.AB_PHOTOS) window.AB_PHOTOS = {};

  window.AB_SECTIONS_V2.forEach(function(country) {
    var cid=country.id, name=country.name, flag=country.flag, base=country.base;
    var players=window.AB_PLAYERS_V2[cid]||[];
    var emoji=EMOJIS[flag]||'🌍';
    var secId='sec_'+cid;

    sections.push({id:secId, name:name.toUpperCase(), label:emoji+' '+name});

    // offset 0 = Bandera
    stickers.push({id:base,sec:secId,emoji:emoji,name:name,sub:'Bandera Oficial',pos:'Selección',rating:70,rare:'normal',isFlag:true});
    window.AB_PHOTOS[base]='https://flagcdn.com/h120/'+flag+'.png';

    // offset 1 = Escudo
    stickers.push({id:base+1,sec:secId,emoji:emoji,name:name+' Escudo',sub:'Escudo Oficial',pos:'Selección',rating:72,rare:'silver',isFlag:true});
    window.AB_PHOTOS[base+1]='https://flagcdn.com/h120/'+flag+'.png';

    // Players at their offsets
    players.forEach(function(p) {
      var offset=p[0], pName=p[1], pos=p[2], rating=p[3], wiki=p[4];
      var sid=base+offset;
      // Check uniqueness
      var existing=stickers.find(function(s){return s.id===sid;});
      if(existing){
        console.error('[Album] ID CONFLICT: '+sid+' already used by '+existing.name+', trying to add '+pName);
        return;
      }
      var rare=rating>=92?'legendary':rating>=85?'gold':rating>=79?'silver':'normal';
      stickers.push({id:sid,sec:secId,emoji:emoji,name:pName,sub:name+' · '+pos,pos:pos,rating:rating,rare:rare,isFlag:false});
      if(wiki) wikiMap[sid]=wiki;
    });
  });

  window.AB_SECTIONS=sections;
  window.AB_STICKERS=stickers;
  window.AB_WIKI_MAP=wikiMap;

  // Clear old cache to force fresh Wikipedia fetches after ID fix
  var cacheKey='ab_photos_v5';
  var existingCache=JSON.parse(localStorage.getItem(cacheKey)||'{}');
  // Only clear if IDs don't match new structure (detect by checking Brasil ID 1020)
  if(!existingCache['1020'] && Object.keys(existingCache).length > 0) {
    localStorage.removeItem(cacheKey);
    console.log('[Album] Cache cleared — ID structure changed');
  }

  console.log('[Panini] '+stickers.length+' figuritas, '+sections.length+' selecciones');
})();

// ── Wikipedia photo loader ───────────────────────────────────
var AB_CACHE_KEY = 'ab_photos_v5';

function _abGetCache(){ try{return JSON.parse(localStorage.getItem(AB_CACHE_KEY)||'{}');}catch(e){return{};} }
function _abSetCache(c){ try{localStorage.setItem(AB_CACHE_KEY,JSON.stringify(c));}catch(e){} }

async function abLoadPlayerPhotos(){
  var wikiMap=window.AB_WIKI_MAP||{};
  var cache=_abGetCache();
  var missing=[];

  Object.keys(cache).forEach(function(id){ if(cache[id]) window.AB_PHOTOS[parseInt(id)]=cache[id]; });

  Object.keys(wikiMap).forEach(function(id){ if(!cache[id]) missing.push({id:parseInt(id),strId:id,title:wikiMap[id]}); });

  if(Object.keys(cache).length>0){
    try{ if(typeof abRenderGrid==='function') abRenderGrid(); }catch(e){}
  }
  if(!missing.length) return;

  // Fetch in batches of 20
  for(var i=0;i<missing.length;i+=20){
    var batch=missing.slice(i,i+20);
    var titles=batch.map(function(p){return p.title;}).join('|');
    try{
      var url='https://en.wikipedia.org/w/api.php?action=query&titles='+encodeURIComponent(titles)+'&prop=pageimages&pithumbsize=300&format=json&origin=*';
      var data=await fetch(url).then(function(r){return r.json();});
      var byTitle={};
      Object.values(data.query.pages).forEach(function(page){
        if(page.thumbnail&&page.thumbnail.source) byTitle[page.title.toLowerCase()]=page.thumbnail.source;
      });
      batch.forEach(function(p){
        var thumb=byTitle[p.title.toLowerCase()];
        window.AB_PHOTOS[p.id]=thumb||null;
        cache[p.strId]=thumb||null;
        if(thumb) document.querySelectorAll('[data-ab-id="'+p.id+'"] img').forEach(function(img){img.src=thumb;});
      });
      _abSetCache(cache);
    }catch(e){ console.warn('Wiki batch error:',e.message); }
    if(i+20<missing.length) await new Promise(function(r){setTimeout(r,300);});
  }
  try{ if(typeof abRenderGrid==='function') abRenderGrid(); }catch(e){}
}

window.abRefreshPhotos=function(){localStorage.removeItem(AB_CACHE_KEY);abLoadPlayerPhotos();};

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',function(){setTimeout(abLoadPlayerPhotos,600);});
}else{
  setTimeout(abLoadPlayerPhotos,600);
}
