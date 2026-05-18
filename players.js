/**
 * players.js — Album Panini Mundial 2026
 * 48 selecciones x ~11 jugadores
 * Fotos cargadas dinamicamente desde Wikipedia API con cache localStorage
 */

window.AB_SECTIONS_V2 = [
  {id:'col',name:'Colombia',flag:'co',base:1000},
  {id:'bra',name:'Brasil',flag:'br',base:1013},
  {id:'arg',name:'Argentina',flag:'ar',base:1026},
  {id:'uru',name:'Uruguay',flag:'uy',base:1039},
  {id:'ecu',name:'Ecuador',flag:'ec',base:1052},
  {id:'par',name:'Paraguay',flag:'py',base:1065},
  {id:'mex',name:'Mexico',flag:'mx',base:1078},
  {id:'usa',name:'USA',flag:'us',base:1091},
  {id:'can',name:'Canada',flag:'ca',base:1104},
  {id:'pan',name:'Panama',flag:'pa',base:1117},
  {id:'cos',name:'Costa Rica',flag:'cr',base:1130},
  {id:'hon',name:'Honduras',flag:'hn',base:1143},
  {id:'fra',name:'Francia',flag:'fr',base:1156},
  {id:'esp',name:'Espana',flag:'es',base:1169},
  {id:'ale',name:'Alemania',flag:'de',base:1182},
  {id:'eng',name:'Inglaterra',flag:'gb-eng',base:1195},
  {id:'por',name:'Portugal',flag:'pt',base:1208},
  {id:'ita',name:'Italia',flag:'it',base:1221},
  {id:'hol',name:'Paises Bajos',flag:'nl',base:1234},
  {id:'bel',name:'Belgica',flag:'be',base:1247},
  {id:'cro',name:'Croacia',flag:'hr',base:1260},
  {id:'sui',name:'Suiza',flag:'ch',base:1273},
  {id:'tur',name:'Turquia',flag:'tr',base:1286},
  {id:'ser',name:'Serbia',flag:'rs',base:1299},
  {id:'aus',name:'Austria',flag:'at',base:1312},
  {id:'esq',name:'Escocia',flag:'gb-sct',base:1325},
  {id:'hun',name:'Hungria',flag:'hu',base:1338},
  {id:'geo',name:'Georgia',flag:'ge',base:1351},
  {id:'mar',name:'Marruecos',flag:'ma',base:1364},
  {id:'sen',name:'Senegal',flag:'sn',base:1377},
  {id:'nga',name:'Nigeria',flag:'ng',base:1390},
  {id:'egy',name:'Egipto',flag:'eg',base:1403},
  {id:'cmr',name:'Camerun',flag:'cm',base:1416},
  {id:'cdi',name:'Costa Marfil',flag:'ci',base:1429},
  {id:'alg',name:'Argelia',flag:'dz',base:1455},
  {id:'jap',name:'Japon',flag:'jp',base:1481},
  {id:'cor',name:'Corea del Sur',flag:'kr',base:1494},
  {id:'ira',name:'Iran',flag:'ir',base:1507},
  {id:'au2',name:'Australia',flag:'au',base:1520},
  {id:'ara',name:'Arabia Saudita',flag:'sa',base:1533},
];

// offset, nombre, posicion, rating, wiki_title
window.AB_PLAYERS_V2 = {
  col:[
    [2,'Camilo Vargas','POR',78,'Camilo Vargas (Colombian footballer)'],
    [3,'Davinson Sanchez','DEF',83,'Davinson Sanchez'],
    [4,'Yerry Mina','DEF',80,'Yerry Mina'],
    [5,'Daniel Munoz','LAT',82,'Daniel Munoz (footballer)'],
    [6,'Johan Mojica','LAT',79,'Johan Mojica'],
    [7,'Matheus Uribe','MED',79,'Matheus Uribe'],
    [8,'Jefferson Lerma','MED',80,'Jefferson Lerma'],
    [9,'James Rodriguez','MED',85,'James Rodriguez (Colombian footballer)'],
    [10,'Luis Diaz','DEL',87,'Luis Diaz (footballer, born 1997)'],
    [11,'Radamel Falcao','DEL',82,'Radamel Falcao'],
    [12,'Richard Rios','MED',81,'Richard Rios'],
    [13,'Rafael Santos Borre','DEL',80,'Rafael Santos Borre'],
    [14,'Jhon Cordoba','DEL',79,'Jhon Cordoba'],
    [15,'Juan Cuadrado','LAT',81,'Juan Cuadrado'],
  ],
  bra:[
    [2,'Alisson Becker','POR',92,'Alisson Becker'],
    [3,'Marquinhos','DEF',87,'Marquinhos (footballer)'],
    [4,'Eder Militao','DEF',85,'Eder Militao'],
    [5,'Danilo','LAT',80,'Danilo (footballer, born 1991)'],
    [6,'Renan Lodi','LAT',79,'Renan Lodi'],
    [7,'Casemiro','MED',87,'Casemiro'],
    [8,'Bruno Guimaraes','MED',86,'Bruno Guimaraes'],
    [9,'Lucas Paqueta','MED',85,'Lucas Paqueta'],
    [10,'Vinicius Jr','DEL',94,'Vinicius Junior'],
    [11,'Rodrygo','DEL',87,'Rodrygo'],
    [12,'Raphinha','DEL',86,'Raphinha'],
  ],
  arg:[
    [2,'Emiliano Martinez','POR',88,'Emiliano Martinez'],
    [3,'Cristian Romero','DEF',86,'Cristian Romero'],
    [4,'Lisandro Martinez','DEF',85,'Lisandro Martinez'],
    [5,'Nahuel Molina','LAT',82,'Nahuel Molina'],
    [6,'Nicolas Tagliafico','LAT',80,'Nicolas Tagliafico'],
    [7,'Rodrigo De Paul','MED',84,'Rodrigo De Paul'],
    [8,'Enzo Fernandez','MED',85,'Enzo Fernandez (footballer)'],
    [9,'Alexis Mac Allister','MED',85,'Alexis Mac Allister'],
    [10,'Lionel Messi','DEL',99,'Lionel Messi'],
    [11,'Julian Alvarez','DEL',87,'Julian Alvarez'],
    [12,'Lautaro Martinez','DEL',89,'Lautaro Martinez'],
  ],
  uru:[
    [2,'Sergio Rochet','POR',80,'Sergio Rochet'],
    [3,'Jose Maria Gimenez','DEF',83,'Jose Maria Gimenez'],
    [4,'Ronald Araujo','DEF',85,'Ronald Araujo'],
    [5,'Nahitan Nandez','LAT',79,'Nahitan Nandez'],
    [6,'Mathias Olivera','LAT',80,'Mathias Olivera'],
    [7,'Federico Valverde','MED',87,'Federico Valverde'],
    [8,'Rodrigo Bentancur','MED',83,'Rodrigo Bentancur'],
    [9,'Manuel Ugarte','MED',83,'Manuel Ugarte (footballer)'],
    [10,'Darwin Nunez','DEL',85,'Darwin Nunez'],
    [11,'Luis Suarez','DEL',83,'Luis Suarez'],
    [12,'Facundo Pellistri','DEL',79,'Facundo Pellistri'],
  ],
  ecu:[
    [2,'Hernan Galindez','POR',76,'Hernan Galindez'],
    [3,'Felix Torres','DEF',79,'Felix Torres (footballer)'],
    [4,'Piero Hincapie','DEF',82,'Piero Hincapie'],
    [5,'Angelo Preciado','LAT',78,'Angelo Preciado'],
    [6,'Pervis Estupinian','LAT',83,'Pervis Estupinian'],
    [7,'Moises Caicedo','MED',86,'Moises Caicedo'],
    [8,'Carlos Gruezo','MED',77,'Carlos Gruezo'],
    [9,'Romario Ibarra','MED',77,'Romario Ibarra'],
    [10,'Enner Valencia','DEL',79,'Enner Valencia'],
    [11,'Michael Estrada','DEL',76,'Michael Estrada'],
    [12,'Gonzalo Plata','DEL',78,'Gonzalo Plata'],
  ],
  par:[
    [2,'Antony Silva','POR',75,'Antony Silva'],
    [3,'Gustavo Gomez','DEF',82,'Gustavo Gomez (footballer)'],
    [4,'Omar Alderete','DEF',79,'Omar Alderete'],
    [5,'Junior Alonso','DEF',78,'Junior Alonso'],
    [6,'Santiago Arzamendia','LAT',77,'Santiago Arzamendia'],
    [7,'Miguel Almiron','MED',83,'Miguel Almiron'],
    [8,'Mathias Villasanti','MED',77,'Mathias Villasanti'],
    [9,'Angel Romero','MED',79,'Angel Romero'],
    [10,'Antonio Sanabria','DEL',78,'Antonio Sanabria'],
    [11,'Julio Enciso','DEL',80,'Julio Enciso'],
    [12,'Alejandro Romero','DEL',76,'Kaku (footballer)'],
  ],
  mex:[
    [2,'Guillermo Ochoa','POR',80,'Guillermo Ochoa'],
    [3,'Cesar Montes','DEF',79,'Cesar Montes'],
    [4,'Johan Vasquez','DEF',78,'Johan Vasquez'],
    [5,'Jorge Sanchez','LAT',77,'Jorge Sanchez (footballer)'],
    [6,'Jesus Gallardo','LAT',78,'Jesus Gallardo'],
    [7,'Edson Alvarez','MED',84,'Edson Alvarez'],
    [8,'Hector Herrera','MED',79,'Hector Herrera'],
    [9,'Chucky Lozano','DEL',82,'Hirving Lozano'],
    [10,'Raul Jimenez','DEL',81,'Raul Jimenez'],
    [11,'Henry Martin','DEL',78,'Henry Martin'],
    [12,'Alexis Vega','DEL',77,'Alexis Vega (footballer)'],
  ],
  usa:[
    [2,'Matt Turner','POR',79,'Matt Turner (soccer)'],
    [3,'Chris Richards','DEF',78,'Chris Richards (soccer)'],
    [4,'Miles Robinson','DEF',77,'Miles Robinson (soccer)'],
    [5,'Sergino Dest','LAT',80,'Sergino Dest'],
    [6,'Antonee Robinson','LAT',81,'Antonee Robinson'],
    [7,'Weston McKennie','MED',82,'Weston McKennie'],
    [8,'Tyler Adams','MED',82,'Tyler Adams (soccer)'],
    [9,'Yunus Musah','MED',81,'Yunus Musah'],
    [10,'Christian Pulisic','DEL',83,'Christian Pulisic'],
    [11,'Folarin Balogun','DEL',79,'Folarin Balogun'],
    [12,'Giovanni Reyna','DEL',79,'Giovanni Reyna'],
  ],
  can:[
    [2,'Maxime Crepeau','POR',77,'Maxime Crepeau'],
    [3,'Kamal Miller','DEF',77,'Kamal Miller'],
    [4,'Steven Vitoria','DEF',76,'Steven Vitoria'],
    [5,'Richie Laryea','LAT',77,'Richie Laryea'],
    [6,'Alphonso Davies','LAT',87,'Alphonso Davies'],
    [7,'Atiba Hutchinson','MED',78,'Atiba Hutchinson'],
    [8,'Stephen Eustaquio','MED',79,'Stephen Eustaquio'],
    [9,'Jonathan David','DEL',84,'Jonathan David (soccer)'],
    [10,'Cyle Larin','DEL',78,'Cyle Larin'],
    [11,'Tajon Buchanan','DEL',79,'Tajon Buchanan'],
    [12,'Lucas Cavallini','DEL',75,'Lucas Cavallini'],
  ],
  pan:[
    [2,'Luis Mejia','POR',75,'Luis Mejia (footballer)'],
    [3,'Fidel Escobar','DEF',75,'Fidel Escobar'],
    [4,'Roderick Miller','DEF',74,'Roderick Miller (footballer)'],
    [5,'Michael Murillo','LAT',76,'Michael Murillo'],
    [6,'Edgar Barcenas','MED',75,'Edgar Barcenas'],
    [7,'Adalberto Carrasquilla','MED',76,'Adalberto Carrasquilla'],
    [8,'Armando Cooper','MED',74,'Armando Cooper'],
    [9,'Rolando Blackburn','DEL',74,'Rolando Blackburn'],
    [10,'Ismael Diaz','DEL',76,'Ismael Diaz (footballer)'],
    [11,'Cecilio Waterman','DEL',75,'Cecilio Waterman'],
    [12,'Gabriel Torres','DEL',74,'Gabriel Torres (footballer)'],
  ],
  cos:[
    [2,'Keylor Navas','POR',84,'Keylor Navas'],
    [3,'Francisco Calvo','DEF',77,'Francisco Calvo (footballer)'],
    [4,'Bryan Oviedo','LAT',76,'Bryan Oviedo'],
    [5,'Keysher Fuller','LAT',77,'Keysher Fuller'],
    [6,'Yeltsin Tejeda','MED',76,'Yeltsin Tejeda'],
    [7,'Celso Borges','MED',77,'Celso Borges'],
    [8,'Bryan Ruiz','MED',76,'Bryan Ruiz'],
    [9,'Joel Campbell','DEL',79,'Joel Campbell'],
    [10,'Alonso Martinez','DEL',76,'Alonso Martinez (footballer)'],
    [11,'Anthony Contreras','DEL',75,'Anthony Contreras (footballer)'],
    [12,'Johan Venegas','DEL',74,'Johan Venegas'],
  ],
  hon:[
    [2,'Luis Lopez','POR',73,'Luis Lopez (Honduran footballer)'],
    [3,'Denil Maldonado','DEF',74,'Denil Maldonado'],
    [4,'Marcelo Santos','DEF',73,'Marcelo Santos (footballer)'],
    [5,'Maynor Figueroa','DEF',72,'Maynor Figueroa'],
    [6,'Edwin Rodriguez','MED',73,'Edwin Rodriguez (Honduran footballer)'],
    [7,'Alberth Elis','MED',77,'Alberth Elis'],
    [8,'Romell Quioto','MED',76,'Romell Quioto'],
    [9,'Antony Lozano','DEL',76,'Antony Lozano'],
    [10,'Jerry Bengtson','DEL',74,'Jerry Bengtson'],
    [11,'Jonathan Rubio','DEL',73,'Jonathan Rubio (footballer)'],
    [12,'Rigoberto Rivas','DEL',74,'Rigoberto Rivas'],
  ],
  fra:[
    [2,'Mike Maignan','POR',87,'Mike Maignan'],
    [3,'William Saliba','DEF',87,'William Saliba'],
    [4,'Dayot Upamecano','DEF',85,'Dayot Upamecano'],
    [5,'Jules Kounde','LAT',85,'Jules Kounde'],
    [6,'Theo Hernandez','LAT',85,'Theo Hernandez'],
    [7,'Aurelien Tchouameni','MED',85,'Aurelien Tchouameni'],
    [8,'Adrien Rabiot','MED',82,'Adrien Rabiot'],
    [9,'Antoine Griezmann','MED',88,'Antoine Griezmann'],
    [10,'Kylian Mbappe','DEL',97,'Kylian Mbappe'],
    [11,'Ousmane Dembele','DEL',87,'Ousmane Dembele'],
    [12,'Marcus Thuram','DEL',85,'Marcus Thuram'],
  ],
  esp:[
    [2,'Unai Simon','POR',83,'Unai Simon'],
    [3,'Robin Le Normand','DEF',82,'Robin Le Normand'],
    [4,'Aymeric Laporte','DEF',83,'Aymeric Laporte'],
    [5,'Dani Carvajal','LAT',84,'Dani Carvajal'],
    [6,'Alejandro Grimaldo','LAT',83,'Alejandro Grimaldo'],
    [7,'Rodri','MED',92,'Rodrigo Hernandez Cascante'],
    [8,'Pedri','MED',89,'Pedri'],
    [9,'Gavi','MED',87,'Gavi (footballer)'],
    [10,'Lamine Yamal','DEL',87,'Lamine Yamal'],
    [11,'Alvaro Morata','DEL',83,'Alvaro Morata'],
    [12,'Nico Williams','DEL',85,'Nico Williams'],
  ],
  ale:[
    [2,'Manuel Neuer','POR',85,'Manuel Neuer'],
    [3,'Antonio Rudiger','DEF',87,'Antonio Rudiger'],
    [4,'Jonathan Tah','DEF',82,'Jonathan Tah'],
    [5,'Benjamin Pavard','LAT',82,'Benjamin Pavard'],
    [6,'David Raum','LAT',81,'David Raum'],
    [7,'Joshua Kimmich','MED',87,'Joshua Kimmich'],
    [8,'Leon Goretzka','MED',83,'Leon Goretzka'],
    [9,'Jamal Musiala','MED',89,'Jamal Musiala'],
    [10,'Florian Wirtz','DEL',88,'Florian Wirtz'],
    [11,'Leroy Sane','DEL',85,'Leroy Sane'],
    [12,'Thomas Muller','DEL',83,'Thomas Muller'],
  ],
  eng:[
    [2,'Jordan Pickford','POR',82,'Jordan Pickford'],
    [3,'John Stones','DEF',83,'John Stones'],
    [4,'Harry Maguire','DEF',79,'Harry Maguire'],
    [5,'Trent Alexander-Arnold','LAT',87,'Trent Alexander-Arnold'],
    [6,'Luke Shaw','LAT',81,'Luke Shaw'],
    [7,'Declan Rice','MED',86,'Declan Rice'],
    [8,'Jude Bellingham','MED',91,'Jude Bellingham'],
    [9,'Phil Foden','MED',87,'Phil Foden'],
    [10,'Harry Kane','DEL',91,'Harry Kane'],
    [11,'Bukayo Saka','DEL',87,'Bukayo Saka'],
    [12,'Marcus Rashford','DEL',84,'Marcus Rashford'],
  ],
  por:[
    [2,'Diogo Costa','POR',82,'Diogo Costa'],
    [3,'Ruben Dias','DEF',88,'Ruben Dias'],
    [4,'Pepe','DEF',80,'Pepe (footballer)'],
    [5,'Joao Cancelo','LAT',85,'Joao Cancelo'],
    [6,'Nuno Mendes','LAT',83,'Nuno Mendes'],
    [7,'Vitinha','MED',84,'Vitinha (Portuguese footballer)'],
    [8,'Bruno Fernandes','MED',88,'Bruno Fernandes (midfielder)'],
    [9,'Bernardo Silva','MED',87,'Bernardo Silva'],
    [10,'Cristiano Ronaldo','DEL',92,'Cristiano Ronaldo'],
    [11,'Rafael Leao','DEL',86,'Rafael Leao'],
    [12,'Goncalo Ramos','DEL',83,'Goncalo Ramos'],
  ],
  ita:[
    [2,'Gianluigi Donnarumma','POR',88,'Gianluigi Donnarumma'],
    [3,'Alessandro Bastoni','DEF',86,'Alessandro Bastoni'],
    [4,'Leonardo Bonucci','DEF',79,'Leonardo Bonucci'],
    [5,'Giovanni Di Lorenzo','LAT',82,'Giovanni Di Lorenzo'],
    [6,'Federico Dimarco','LAT',83,'Federico Dimarco'],
    [7,'Nicolo Barella','MED',86,'Nicolo Barella'],
    [8,'Marco Verratti','MED',84,'Marco Verratti'],
    [9,'Lorenzo Pellegrini','MED',82,'Lorenzo Pellegrini'],
    [10,'Federico Chiesa','DEL',84,'Federico Chiesa'],
    [11,'Ciro Immobile','DEL',83,'Ciro Immobile'],
    [12,'Giacomo Raspadori','DEL',80,'Giacomo Raspadori'],
  ],
  hol:[
    [2,'Bart Verbruggen','POR',80,'Bart Verbruggen'],
    [3,'Virgil van Dijk','DEF',88,'Virgil van Dijk'],
    [4,'Matthijs de Ligt','DEF',85,'Matthijs de Ligt'],
    [5,'Denzel Dumfries','LAT',83,'Denzel Dumfries'],
    [6,'Nathan Ake','DEF',82,'Nathan Ake'],
    [7,'Frenkie de Jong','MED',86,'Frenkie de Jong'],
    [8,'Tijjani Reijnders','MED',83,'Tijjani Reijnders'],
    [9,'Xavi Simons','MED',84,'Xavi Simons'],
    [10,'Memphis Depay','DEL',83,'Memphis Depay'],
    [11,'Donyell Malen','DEL',81,'Donyell Malen'],
    [12,'Wout Weghorst','DEL',79,'Wout Weghorst'],
  ],
  bel:[
    [2,'Koen Casteels','POR',82,'Koen Casteels'],
    [3,'Toby Alderweireld','DEF',80,'Toby Alderweireld'],
    [4,'Jan Vertonghen','DEF',79,'Jan Vertonghen'],
    [5,'Thomas Meunier','LAT',79,'Thomas Meunier'],
    [6,'Yannick Carrasco','LAT',80,'Yannick Carrasco'],
    [7,'Kevin De Bruyne','MED',91,'Kevin De Bruyne'],
    [8,'Axel Witsel','MED',80,'Axel Witsel'],
    [9,'Youri Tielemans','MED',82,'Youri Tielemans'],
    [10,'Romelu Lukaku','DEL',84,'Romelu Lukaku'],
    [11,'Dries Mertens','DEL',81,'Dries Mertens'],
    [12,'Leandro Trossard','DEL',82,'Leandro Trossard'],
  ],
  cro:[
    [2,'Dominik Livakovic','POR',83,'Dominik Livakovic'],
    [3,'Dejan Lovren','DEF',79,'Dejan Lovren'],
    [4,'Josip Sutalo','DEF',80,'Josip Sutalo'],
    [5,'Josip Juranovic','LAT',79,'Josip Juranovic'],
    [6,'Borna Sosa','LAT',79,'Borna Sosa'],
    [7,'Luka Modric','MED',87,'Luka Modric'],
    [8,'Mateo Kovacic','MED',84,'Mateo Kovacic'],
    [9,'Marcelo Brozovic','MED',83,'Marcelo Brozovic'],
    [10,'Ivan Perisic','DEL',82,'Ivan Perisic'],
    [11,'Ante Budimir','DEL',78,'Ante Budimir'],
    [12,'Bruno Petkovic','DEL',77,'Bruno Petkovic'],
  ],
  sui:[
    [2,'Yann Sommer','POR',83,'Yann Sommer'],
    [3,'Manuel Akanji','DEF',84,'Manuel Akanji'],
    [4,'Fabian Schar','DEF',82,'Fabian Schar'],
    [5,'Silvan Widmer','LAT',79,'Silvan Widmer'],
    [6,'Ricardo Rodriguez','LAT',79,'Ricardo Rodriguez (footballer, born 1992)'],
    [7,'Granit Xhaka','MED',83,'Granit Xhaka'],
    [8,'Remo Freuler','MED',80,'Remo Freuler'],
    [9,'Xherdan Shaqiri','MED',80,'Xherdan Shaqiri'],
    [10,'Breel Embolo','DEL',81,'Breel Embolo'],
    [11,'Noah Okafor','DEL',80,'Noah Okafor'],
    [12,'Ruben Vargas','DEL',78,'Ruben Vargas (Swiss footballer)'],
  ],
  tur:[
    [2,'Altay Bayindir','POR',79,'Altay Bayindir'],
    [3,'Merih Demiral','DEF',82,'Merih Demiral'],
    [4,'Samet Akaydin','DEF',79,'Samet Akaydin'],
    [5,'Zeki Celik','LAT',80,'Zeki Celik'],
    [6,'Ferdi Kadioglu','LAT',81,'Ferdi Kadioglu'],
    [7,'Hakan Calhanoglu','MED',85,'Hakan Calhanoglu'],
    [8,'Salih Ozcan','MED',78,'Salih Ozcan'],
    [9,'Arda Guler','MED',83,'Arda Guler'],
    [10,'Kenan Yildiz','DEL',82,'Kenan Yildiz'],
    [11,'Burak Yilmaz','DEL',79,'Burak Yilmaz'],
    [12,'Cenk Tosun','DEL',78,'Cenk Tosun'],
  ],
  ser:[
    [2,'Predrag Rajkovic','POR',80,'Predrag Rajkovic'],
    [3,'Nikola Milenkovic','DEF',81,'Nikola Milenkovic'],
    [4,'Stefan Mitrovic','DEF',79,'Stefan Mitrovic (footballer)'],
    [5,'Dusan Tadic','MED',83,'Dusan Tadic'],
    [6,'Filip Mladenovic','LAT',76,'Filip Mladenovic'],
    [7,'Sergej Milinkovic-Savic','MED',86,'Sergej Milinkovic-Savic'],
    [8,'Nemanja Maksimovic','MED',79,'Nemanja Maksimovic'],
    [9,'Sasa Lukic','MED',78,'Sasa Lukic'],
    [10,'Dusan Vlahovic','DEL',85,'Dusan Vlahovic'],
    [11,'Luka Jovic','DEL',80,'Luka Jovic'],
    [12,'Aleksandar Mitrovic','DEL',83,'Aleksandar Mitrovic'],
  ],
  aus:[
    [2,'Patrick Pentz','POR',77,'Patrick Pentz'],
    [3,'Kevin Danso','DEF',81,'Kevin Danso'],
    [4,'Gernot Trauner','DEF',79,'Gernot Trauner'],
    [5,'Stefan Posch','LAT',78,'Stefan Posch'],
    [6,'Philipp Mwene','LAT',76,'Philipp Mwene'],
    [7,'Nicolas Seiwald','MED',80,'Nicolas Seiwald'],
    [8,'Florian Grillitsch','MED',79,'Florian Grillitsch'],
    [9,'Christoph Baumgartner','MED',80,'Christoph Baumgartner'],
    [10,'Marko Arnautovic','DEL',80,'Marko Arnautovic'],
    [11,'Michael Gregoritsch','DEL',78,'Michael Gregoritsch'],
    [12,'Sasa Kalajdzic','DEL',77,'Sasa Kalajdzic'],
  ],
  esq:[
    [2,'Craig Gordon','POR',78,'Craig Gordon'],
    [3,'Grant Hanley','DEF',77,'Grant Hanley'],
    [4,'Scott McKenna','DEF',77,'Scott McKenna'],
    [5,'Aaron Hickey','LAT',79,'Aaron Hickey'],
    [6,'Andy Robertson','LAT',86,'Andy Robertson'],
    [7,'Callum McGregor','MED',80,'Callum McGregor'],
    [8,'Ryan Christie','MED',78,'Ryan Christie'],
    [9,'Scott McTominay','MED',81,'Scott McTominay'],
    [10,'Lyndon Dykes','DEL',76,'Lyndon Dykes'],
    [11,'Ryan Fraser','DEL',77,'Ryan Fraser'],
    [12,'Lawrence Shankland','DEL',77,'Lawrence Shankland'],
  ],
  hun:[
    [2,'Peter Gulacsi','POR',80,'Peter Gulacsi'],
    [3,'Willi Orban','DEF',79,'Willi Orban'],
    [4,'Adam Lang','DEF',76,'Adam Lang'],
    [5,'Attila Fiola','LAT',76,'Attila Fiola'],
    [6,'Zsolt Nagy','LAT',75,'Zsolt Nagy (footballer)'],
    [7,'Adam Nagy','MED',78,'Adam Nagy'],
    [8,'Dominik Szoboszlai','MED',85,'Dominik Szoboszlai'],
    [9,'Roland Sallai','MED',79,'Roland Sallai'],
    [10,'Barnabas Varga','DEL',80,'Barnabas Varga (footballer)'],
    [11,'Kevin Csoboth','DEL',76,'Kevin Csoboth'],
    [12,'Adam Szalai','DEL',77,'Adam Szalai'],
  ],
  geo:[
    [2,'Giorgi Mamardashvili','POR',82,'Giorgi Mamardashvili'],
    [3,'Guram Kashia','DEF',75,'Guram Kashia'],
    [4,'Solomon Kverkvelia','DEF',76,'Solomon Kverkvelia'],
    [5,'Giorgi Aburjania','MED',76,'Giorgi Aburjania'],
    [6,'Lasha Dvali','DEF',75,'Lasha Dvali'],
    [7,'Giorgi Chakvetadze','MED',77,'Giorgi Chakvetadze'],
    [8,'Tornike Okriashvili','MED',77,'Tornike Okriashvili'],
    [9,'Khvicha Kvaratskhelia','DEL',88,'Khvicha Kvaratskhelia'],
    [10,'Georges Mikautadze','DEL',80,'Georges Mikautadze'],
    [11,'Zuriko Davitashvili','DEL',77,'Zuriko Davitashvili'],
    [12,'Otar Kiteishvili','MED',76,'Otar Kiteishvili'],
  ],
  mar:[
    [2,'Yassine Bounou','POR',85,'Yassine Bounou'],
    [3,'Nayef Aguerd','DEF',82,'Nayef Aguerd'],
    [4,'Romain Saiss','DEF',80,'Romain Saiss'],
    [5,'Achraf Hakimi','LAT',87,'Achraf Hakimi'],
    [6,'Noussair Mazraoui','LAT',82,'Noussair Mazraoui'],
    [7,'Sofyan Amrabat','MED',83,'Sofyan Amrabat'],
    [8,'Azzedine Ounahi','MED',80,'Azzedine Ounahi'],
    [9,'Hakim Ziyech','MED',83,'Hakim Ziyech'],
    [10,'Youssef En-Nesyri','DEL',83,'Youssef En-Nesyri'],
    [11,'Sofiane Boufal','DEL',80,'Sofiane Boufal'],
    [12,'Munir El Haddadi','DEL',79,'Munir El Haddadi'],
  ],
  sen:[
    [2,'Edouard Mendy','POR',83,'Edouard Mendy'],
    [3,'Kalidou Koulibaly','DEF',85,'Kalidou Koulibaly'],
    [4,'Abdou Diallo','DEF',79,'Abdou Diallo'],
    [5,'Moussa Wague','LAT',77,'Moussa Wague'],
    [6,'Saliou Ciss','LAT',75,'Saliou Ciss'],
    [7,'Idrissa Gueye','MED',81,'Idrissa Gana Gueye'],
    [8,'Cheikhou Kouyate','MED',79,'Cheikhou Kouyate'],
    [9,'Pape Matar Sarr','MED',81,'Pape Matar Sarr'],
    [10,'Sadio Mane','DEL',86,'Sadio Mane'],
    [11,'Ismaila Sarr','DEL',81,'Ismaila Sarr'],
    [12,'Bamba Dieng','DEL',78,'Bamba Dieng'],
  ],
  nga:[
    [2,'Francis Uzoho','POR',76,'Francis Uzoho'],
    [3,'William Troost-Ekong','DEF',80,'William Troost-Ekong'],
    [4,'Kenneth Omeruo','DEF',78,'Kenneth Omeruo'],
    [5,'Ola Aina','LAT',79,'Ola Aina'],
    [6,'Zaidu Sanusi','LAT',78,'Zaidu Sanusi'],
    [7,'Wilfred Ndidi','MED',82,'Wilfred Ndidi'],
    [8,'Alex Iwobi','MED',81,'Alex Iwobi'],
    [9,'Joe Aribo','MED',79,'Joe Aribo'],
    [10,'Victor Osimhen','DEL',88,'Victor Osimhen'],
    [11,'Kelechi Iheanacho','DEL',79,'Kelechi Iheanacho'],
    [12,'Ademola Lookman','DEL',83,'Ademola Lookman'],
  ],
  egy:[
    [2,'Mohamed El Shenawy','POR',78,'Mohamed El Shenawy'],
    [3,'Ahmed Hegazi','DEF',79,'Ahmed Hegazi'],
    [4,'Omar Gaber','DEF',77,'Omar Gaber'],
    [5,'Mahmoud Trezeguet','MED',78,'Mahmoud Trezeguet'],
    [6,'Mohamed Elneny','MED',79,'Mohamed Elneny'],
    [7,'Emam Ashour','MED',77,'Emam Ashour'],
    [8,'Tarek Hamed','MED',76,'Tarek Hamed'],
    [9,'Mohamed Salah','DEL',91,'Mohamed Salah'],
    [10,'Mostafa Mohamed','DEL',78,'Mostafa Mohamed'],
    [11,'Omar Marmoush','DEL',82,'Omar Marmoush'],
    [12,'Amr El Sulaya','MED',75,'Amr El Sulaya'],
  ],
  cmr:[
    [2,'Andre Onana','POR',85,'Andre Onana'],
    [3,'Michael Ngadeu','DEF',78,'Michael Ngadeu-Ngadjui'],
    [4,'Nicolas Nkoulou','DEF',79,'Nicolas Nkoulou'],
    [5,'Collins Fai','LAT',76,'Collins Fai'],
    [6,'Harold Moukoudi','DEF',76,'Harold Moukoudi'],
    [7,'Andre-Frank Zambo Anguissa','MED',83,'Andre-Frank Zambo Anguissa'],
    [8,'Pierre Kunde','MED',77,'Pierre Kunde'],
    [9,'Jean-Pierre Nsame','DEL',78,'Jean-Pierre Nsame'],
    [10,'Vincent Aboubakar','DEL',81,'Vincent Aboubakar'],
    [11,'Karl Toko Ekambi','DEL',80,'Karl Toko Ekambi'],
    [12,'Eric Maxim Choupo-Moting','DEL',78,'Eric Maxim Choupo-Moting'],
  ],
  cdi:[
    [2,'Yahia Fofana','POR',79,'Yahia Fofana (Ivorian footballer)'],
    [3,'Eric Bailly','DEF',79,'Eric Bailly'],
    [4,'Serge Aurier','LAT',79,'Serge Aurier'],
    [5,'Simon Deli','DEF',77,'Simon Deli'],
    [6,'Ghislain Konan','LAT',76,'Ghislain Konan'],
    [7,'Jean Michael Seri','MED',79,'Jean Michael Seri'],
    [8,'Franck Kessie','MED',83,'Franck Kessie'],
    [9,'Ibrahim Sangare','MED',80,'Ibrahim Sangare'],
    [10,'Wilfried Zaha','DEL',81,'Wilfried Zaha'],
    [11,'Nicolas Pepe','DEL',80,'Nicolas Pepe'],
    [12,'Sebastien Haller','DEL',80,'Sebastien Haller'],
  ],
  alg:[
    [2,'Rais MBolhi','POR',78,'Rais MBolhi'],
    [3,'Djamel Benlamri','DEF',78,'Djamel Benlamri'],
    [4,'Aissa Mandi','DEF',79,'Aissa Mandi'],
    [5,'Ramy Bensebaini','LAT',81,'Ramy Bensebaini'],
    [6,'Hicham Boudaoui','MED',78,'Hicham Boudaoui'],
    [7,'Ismael Bennacer','MED',83,'Ismael Bennacer'],
    [8,'Sofiane Feghouli','MED',79,'Sofiane Feghouli'],
    [9,'Nabil Bentaleb','MED',79,'Nabil Bentaleb'],
    [10,'Riyad Mahrez','DEL',85,'Riyad Mahrez'],
    [11,'Andy Delort','DEL',78,'Andy Delort'],
    [12,'Islam Slimani','DEL',78,'Islam Slimani'],
  ],
  jap:[
    [2,'Shuichi Gonda','POR',80,'Shuichi Gonda'],
    [3,'Maya Yoshida','DEF',78,'Maya Yoshida'],
    [4,'Ko Itakura','DEF',80,'Ko Itakura'],
    [5,'Hiroki Sakai','LAT',79,'Hiroki Sakai'],
    [6,'Yuto Nagatomo','LAT',78,'Yuto Nagatomo'],
    [7,'Wataru Endo','MED',82,'Wataru Endo'],
    [8,'Daichi Kamada','MED',82,'Daichi Kamada'],
    [9,'Ao Tanaka','MED',79,'Ao Tanaka'],
    [10,'Takumi Minamino','DEL',80,'Takumi Minamino'],
    [11,'Ritsu Doan','DEL',80,'Ritsu Doan'],
    [12,'Kaoru Mitoma','DEL',82,'Kaoru Mitoma'],
  ],
  cor:[
    [2,'Kim Seung-gyu','POR',78,'Kim Seung-gyu'],
    [3,'Kim Min-jae','DEF',86,'Kim Min-jae'],
    [4,'Kim Young-gwon','DEF',77,'Kim Young-gwon'],
    [5,'Kim Jin-su','LAT',77,'Kim Jin-su'],
    [6,'Jung Woo-young','MED',78,'Jung Woo-young'],
    [7,'Hwang In-beom','MED',79,'Hwang In-beom'],
    [8,'Lee Jae-sung','MED',79,'Lee Jae-sung'],
    [9,'Son Heung-min','DEL',88,'Son Heung-min'],
    [10,'Hwang Hee-chan','DEL',80,'Hwang Hee-chan'],
    [11,'Cho Gue-sung','DEL',78,'Cho Gue-sung'],
    [12,'Lee Kang-in','MED',83,'Lee Kang-in'],
  ],
  ira:[
    [2,'Alireza Beiranvand','POR',79,'Alireza Beiranvand'],
    [3,'Morteza Pouraliganji','DEF',78,'Morteza Pouraliganji'],
    [4,'Majid Hosseini','DEF',77,'Majid Hosseini'],
    [5,'Sadegh Moharrami','LAT',76,'Sadegh Moharrami'],
    [6,'Ehsan Hajsafi','LAT',78,'Ehsan Hajsafi'],
    [7,'Saeid Ezatolahi','MED',78,'Saeid Ezatolahi'],
    [8,'Ali Gholizadeh','MED',77,'Ali Gholizadeh'],
    [9,'Ahmad Nourollahi','MED',76,'Ahmad Nourollahi'],
    [10,'Mehdi Taremi','DEL',83,'Mehdi Taremi'],
    [11,'Sardar Azmoun','DEL',82,'Sardar Azmoun'],
    [12,'Karim Ansarifard','DEL',77,'Karim Ansarifard'],
  ],
  au2:[
    [2,'Mat Ryan','POR',80,'Mat Ryan'],
    [3,'Harry Souttar','DEF',81,'Harry Souttar'],
    [4,'Trent Sainsbury','DEF',77,'Trent Sainsbury'],
    [5,'Nathaniel Atkinson','LAT',76,'Nathaniel Atkinson'],
    [6,'Aziz Behich','LAT',76,'Aziz Behich'],
    [7,'Aaron Mooy','MED',80,'Aaron Mooy'],
    [8,'Riley McGree','MED',78,'Riley McGree'],
    [9,'Jackson Irvine','MED',78,'Jackson Irvine'],
    [10,'Mathew Leckie','DEL',78,'Mathew Leckie'],
    [11,'Mitchell Duke','DEL',76,'Mitchell Duke (footballer)'],
    [12,'Craig Goodwin','DEL',76,'Craig Goodwin'],
  ],
  ara:[
    [2,'Mohammed Al-Owais','POR',79,'Mohammed Al-Owais'],
    [3,'Ali Al-Bulayhi','LAT',76,'Ali Al-Bulayhi'],
    [4,'Abdulelah Al-Amri','DEF',76,'Abdulelah Al-Amri'],
    [5,'Sultan Al-Ghannam','DEF',75,'Sultan Al-Ghannam'],
    [6,'Yasser Al-Shahrani','LAT',77,'Yasser Al-Shahrani'],
    [7,'Mohamed Kanno','MED',77,'Mohamed Kanno'],
    [8,'Salem Al-Dawsari','MED',79,'Salem Al-Dawsari'],
    [9,'Sami Al-Najei','MED',75,'Sami Al-Najei'],
    [10,'Firas Al-Buraikan','DEL',77,'Firas Al-Buraikan'],
    [11,'Saleh Al-Shehri','DEL',77,'Saleh Al-Shehri'],
    [12,'Hattan Bahebri','DEL',75,'Hattan Bahebri'],
  ],
};

// ── Build AB_SECTIONS, AB_STICKERS, AB_PHOTOS from the data above ──────────
(function buildAlbumV2() {
  var EMOJIS = {
    'co':'🇨🇴','br':'🇧🇷','ar':'🇦🇷','uy':'🇺🇾','ec':'🇪🇨','py':'🇵🇾',
    'mx':'🇲🇽','us':'🇺🇸','ca':'🇨🇦','pa':'🇵🇦','cr':'🇨🇷','hn':'🇭🇳',
    'fr':'🇫🇷','es':'🇪🇸','de':'🇩🇪','gb-eng':'🏴󠁧󠁢󠁥󠁮󠁧󠁿','pt':'🇵🇹','it':'🇮🇹',
    'nl':'🇳🇱','be':'🇧🇪','hr':'🇭🇷','ch':'🇨🇭','tr':'🇹🇷','rs':'🇷🇸',
    'at':'🇦🇹','gb-sct':'🏴󠁧󠁢󠁳󠁣󠁴󠁿','hu':'🇭🇺','ge':'🇬🇪',
    'ma':'🇲🇦','sn':'🇸🇳','ng':'🇳🇬','eg':'🇪🇬','cm':'🇨🇲','ci':'🇨🇮',
    'ml':'🇲🇱','dz':'🇩🇿','tz':'🇹🇿',
    'jp':'🇯🇵','kr':'🇰🇷','ir':'🇮🇷','au':'🇦🇺','sa':'🇸🇦','jo':'🇯🇴',
    'uz':'🇺🇿','bo':'🇧🇴','ve':'🇻🇪','nz':'🇳🇿','jm':'🇯🇲',
  };

  var sections = [];
  var stickers = [];
  var wikiMap = {};
  if (!window.AB_PHOTOS) window.AB_PHOTOS = {};

  window.AB_SECTIONS_V2.forEach(function(country) {
    var cid = country.id, name = country.name, flag = country.flag, base = country.base;
    var players = window.AB_PLAYERS_V2[cid] || [];
    var emoji = EMOJIS[flag] || '🌍';
    var secId = 'sec_' + cid;

    sections.push({ id: secId, name: name.toUpperCase(), label: emoji + ' ' + name });

    // Sticker 0: Bandera
    stickers.push({ id: base, sec: secId, name: name, sub: 'Bandera Oficial', pos: 'Seleccion', rating: 75, rare: 'normal', isFlag: true });
    window.AB_PHOTOS[base] = 'https://flagcdn.com/h120/' + flag + '.png';

    // Sticker 1: Escudo
    stickers.push({ id: base+1, sec: secId, name: name, sub: 'Escudo Oficial', pos: 'Seleccion', rating: 78, rare: 'silver', isFlag: true });
    window.AB_PHOTOS[base+1] = 'https://flagcdn.com/h120/' + flag + '.png';

    // Players
    players.forEach(function(p) {
      var offset = p[0], pName = p[1], pos = p[2], rating = p[3], wiki = p[4];
      var sid = base + offset;
      var rare = rating >= 92 ? 'legendary' : rating >= 85 ? 'gold' : rating >= 79 ? 'silver' : 'normal';
      stickers.push({ id: sid, sec: secId, name: pName, sub: name + ' \u00b7 ' + pos, pos: pos, rating: rating, rare: rare, isFlag: false });
      if (wiki) wikiMap[sid] = wiki;
    });
  });

  window.AB_SECTIONS = sections;
  window.AB_STICKERS = stickers;
  window.AB_WIKI_MAP = wikiMap;
  console.log('[Panini] ' + stickers.length + ' figuritas, ' + sections.length + ' selecciones');
})();

// ── Wikipedia photo loader with localStorage cache ──────────────────────────
var AB_CACHE_KEY = 'ab_photos_v5';

function _abGetCache() { try { return JSON.parse(localStorage.getItem(AB_CACHE_KEY) || '{}'); } catch(e) { return {}; } }
function _abSetCache(c) { try { localStorage.setItem(AB_CACHE_KEY, JSON.stringify(c)); } catch(e) {} }

async function abLoadPlayerPhotos() {
  var wikiMap = window.AB_WIKI_MAP || {};
  var cache = _abGetCache();
  var missing = [];

  // Apply cache instantly
  Object.keys(cache).forEach(function(id) {
    if (cache[id]) window.AB_PHOTOS[parseInt(id)] = cache[id];
  });

  // Find IDs not yet cached
  Object.keys(wikiMap).forEach(function(id) {
    if (!cache[id]) missing.push({ id: parseInt(id), strId: id, title: wikiMap[id] });
  });

  // Re-render if we had cache
  if (Object.keys(cache).length > 0) {
    try { if (typeof abRenderGrid === 'function') abRenderGrid(); } catch(e) {}
  }

  if (!missing.length) return;

  // Fetch in batches of 20
  for (var i = 0; i < missing.length; i += 20) {
    var batch = missing.slice(i, i + 20);
    var titles = batch.map(function(p) { return p.title; }).join('|');
    try {
      var url = 'https://en.wikipedia.org/w/api.php?action=query&titles=' + encodeURIComponent(titles) + '&prop=pageimages&pithumbsize=300&format=json&origin=*';
      var data = await fetch(url).then(function(r) { return r.json(); });
      var byTitle = {};
      Object.values(data.query.pages).forEach(function(page) {
        if (page.thumbnail && page.thumbnail.source) byTitle[page.title.toLowerCase()] = page.thumbnail.source;
      });
      batch.forEach(function(p) {
        var thumb = byTitle[p.title.toLowerCase()];
        window.AB_PHOTOS[p.id] = thumb || null;
        cache[p.strId] = thumb || null;
        if (thumb) document.querySelectorAll('[data-ab-id="'+p.id+'"] img').forEach(function(img) { img.src = thumb; });
      });
      _abSetCache(cache);
    } catch(e) { console.warn('Wiki batch error:', e.message); }
    if (i + 20 < missing.length) await new Promise(function(r) { setTimeout(r, 300); });
  }
  try { if (typeof abRenderGrid === 'function') abRenderGrid(); } catch(e) {}
}

window.abRefreshPhotos = function() { localStorage.removeItem(AB_CACHE_KEY); abLoadPlayerPhotos(); };

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() { setTimeout(abLoadPlayerPhotos, 600); });
} else {
  setTimeout(abLoadPlayerPhotos, 600);
}
