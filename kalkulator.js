// Console Calculator by drb0r1s

(function() {
  console.log("--> JavaScript Console Calculator <--");
  console.log("Developer: drb0r1s\n\n");

  const OPTIONS = {
    CLASSIC: "Klasični kalkulator",
    GEOMETRY: "Geometrija",
    RANDOM_NUMBER: "Nasumični broj"
  };

  const GEOMETRY_OPTIONS = {
    TWO_D: ["Dvodimenzionalni oblici", {
      RECTANGLE: "Kvadrat / Pravougaonik",
      CIRCLE: "Krug",
      TRIANGLE: "Trougao"
    }],
    
    THREE_D: ["Trodimenzionalni oblici", {
      SQUARE: "Kvadar",
      BALL: "Lopta"
    }]
  };

  const TWO_D_OPERATIONS = ["Obim", "Površina"];
  const THREE_D_OPERATIONS = ["Površina", "Zapremina"];

  const errorMessage = "\nINFO: Uneta opcija ne postoji!";
  const valueError = "\nERROR: Moraš da uneseš vrednost promenljive!";
  const notNumberError = "\nERROR: Moraš da uneseš broj kao vrednost!";

  console.log("Opcije kalkulatora: ");

  const allOptions = Object.values(OPTIONS);
  const allGeometryOptions = Object.values(GEOMETRY_OPTIONS);

  allOptions.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });

  const option = parseInt(prompt("Izaberi opciju kalkulatora, tako što ćeš uneti broj opcije: "));

  if(allOptions[option - 1] === undefined) return console.log(errorMessage);

  console.log(`\nOPCIJA: ${allOptions[option - 1]}`);

  switch(allOptions[option - 1]) {
    case OPTIONS.CLASSIC:
      const calc = prompt("\nUnesi brojeve: ");
      let isFloat = false;

      for(let i = 0; i < calc.length; i++) {
        if(calc[i] === ".") isFloat = true;
      }

      console.log(`\nRešenje izvršene operacije nad ${isFloat ? "realnim" : "celobrojnim"} brojevima:`);
      
      const solution = eval(calc);
      console.log(`${calc} = ${isFloat ? solution.toFixed(2) : solution}`);

      break;
    case OPTIONS.GEOMETRY:
      console.log("\nDimenzije: ");
      
      allGeometryOptions.forEach((option, index) => {
        console.log(`${index + 1}. ${option[0]}`);
      });
      
      const geoOption = parseInt(prompt("Odaberi vrstu oblika za racunanje: "));

      if(allGeometryOptions[geoOption - 1] === undefined) return console.log(errorMessage);
      
      console.log(`\nGEOMETRIJA: ${allGeometryOptions[geoOption - 1][0]}`);

      let advancedMode = "";
      let selectOperation;
      let operation;
      
      switch(allGeometryOptions[geoOption - 1]) {
        case GEOMETRY_OPTIONS.TWO_D:
          const allTwoDOptions = Object.values(GEOMETRY_OPTIONS.TWO_D[1]);
          
          allTwoDOptions.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
          });
      
          const twoOption = parseInt(prompt("Odaberi dvodimenzionalni oblik za racunanje: "));
          
          console.log("\nOperacije: ");
          
          TWO_D_OPERATIONS.forEach((calcOperation, index) => {
            console.log(`${index + 1}. ${calcOperation}`);
          });

          selectOperation = parseInt(prompt("Odaberi operaciju koja ce se primenjivati u racunanju: "));

          if(allTwoDOptions[twoOption - 1] !== undefined) {
            advancedMode = allTwoDOptions[twoOption - 1];
            operation = TWO_D_OPERATIONS[selectOperation - 1];

            console.log(`\nDVODIMENZIONALNA GEOMETRIJA: ${allTwoDOptions[twoOption - 1]}`);
            console.log(`NAPREDNI MOD: ${advancedMode}, OPERACIJA: ${operation}\n`);
          }

          switch(allTwoDOptions[twoOption - 1]) {
            case GEOMETRY_OPTIONS.TWO_D[1].RECTANGLE:
              const a = prompt("Unesi stranicu a: ");
              const b = prompt("Unesi stranicu b: ");
    
              if(
                a === null ||
                b === null ||
                a.length === 0 ||
                b.length === 0
              ) return console.log(valueError);
    
              const rectA = checkFloat(a);
              const rectB = checkFloat(b);

              if(
                isNaN(rectA) ||
                isNaN(rectB)
              ) return console.log(notNumberError);
    
              const isSquare = a === b ? true : false;

              console.log(`\n${operation} unetog ${isSquare ? "kvadrata" : "pravougaonika"} iznosi:`);
              console.log(`${isSquare ? `a = ${a}` : `a = ${a}\nb = ${b}`}`);
    
              switch(operation) {
                case "Obim":
                  if(isSquare) console.log(`4a (a + a + a + a) = ${4 * rectA}`);
                  else console.log(`2a + 2b (a + a + b + b) = ${2 * rectA + 2 * rectB}`);
        
                  break;
                case "Površina":
                  if(isSquare) console.log(`a² (a * a) = ${rectA * rectA}`);
                  else console.log(`ab (a * b) = ${rectA * rectB}`);
          
                  break;
                default: console.log(errorMessage);
              }
          
              break;
            case GEOMETRY_OPTIONS.TWO_D[1].CIRCLE:
              const r = prompt("Unesi poluprečnik r: ");

              if(r === null || r.length === 0) return console.log(valueError);

              const circleR = checkFloat(r);

              if(isNaN(circleR)) return console.log(notNumberError);
    
              console.log(`\n${operation} unetog kruga iznosi:`);
              console.log(`r = ${r}`);

              switch(operation) {
                case "Obim":
                  const circleO = 2 * circleR * Math.PI;
                  console.log(`2rPI = ${circleO.toFixed(2)}`);

                  break;
                case "Površina":
                  const circleP = circleR * circleR * Math.PI;
                  console.log(`r²PI = ${circleP.toFixed(2)}`);
        
                  break;
                default: console.log(errorMessage);
              }

              break;
            case GEOMETRY_OPTIONS.TWO_D[1].TRIANGLE:
              const triangleA = prompt("Unesi stranicu trougla a: ");
              const triangleB = prompt("Unesi stranicu trougla b: ");
              const triangleC = prompt("Unesi stranicu trougla c: ");

              if(
                triangleA === null ||
                triangleB === null ||
                triangleC === null ||
                triangleA.length === 0 ||
                triangleB.length === 0 ||
                triangleC.length === 0
              ) return console.log(valueError);

              const tA = checkFloat(triangleA);
              const tB = checkFloat(triangleB);
              const tC = checkFloat(triangleC);

              if(
                isNaN(tA) ||
                isNaN(tB) ||
                isNaN(tC)
              ) return console.log(notNumberError);

              let sameSides = 0;
              let triangleType = ""

              if(tA === tB) sameSides++;
              if(tA === tC) sameSides++;
              if(tA !== tB && tB === tC) sameSides++;

              switch(sameSides) {
                case 0:
                  triangleType = "nejednakostranicnog";

                  break;
                case 1:
                  triangleType = "jednakokrakog";

                  break;
                case 2:
                  triangleType = "jednakostranicnog";

                  break;
                default: triangleType = "";
              }

              console.log(`\n${operation} unetog ${triangleType} torugla iznosi:`);
              console.log(`a = ${triangleA}\nb = ${triangleB}\nc = ${triangleC}`);
          
              switch(operation) {
                case "Obim":
                  const triangleO = tA + tB + tC;
                  console.log(`a + b + c = ${triangleO}`);
              
                  break;
                case "Površina":
                  const triangleP = 1 / 2 * (tA + tB + tC);
                  console.log(`1 / 2 * (a + b + c) = ${triangleP}`);
              
                  break;
                default: console.log(errorMessage);
              }
          
              break;
            default: console.log(errorMessage);
          }

          break;
        case GEOMETRY_OPTIONS.THREE_D:
          const allThreeDOptions = Object.values(GEOMETRY_OPTIONS.THREE_D[1]);
          
          allThreeDOptions.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
          });
      
          const threeOption = parseInt(prompt("Odaberi trodimenzionalni oblik za racunanje: "));
          
          console.log("\nOperacije: ");
          
          THREE_D_OPERATIONS.forEach((calcOperation, index) => {
            console.log(`${index + 1}. ${calcOperation}`);
          });

          selectOperation = parseInt(prompt("Odaberi operaciju koja ce se primenjivati u racunanju: "));

          if(allThreeDOptions[threeOption - 1] !== undefined) {
            advancedMode = allThreeDOptions[threeOption - 1];
            operation = THREE_D_OPERATIONS[selectOperation - 1];

            console.log(`\nTRODIMENZIONALNA GEOMETRIJA: ${allThreeDOptions[threeOption - 1]}`);
            console.log(`NAPREDNI MOD: ${advancedMode}, OPERACIJA: ${operation}\n`);
          }

          switch(allThreeDOptions[threeOption - 1]) {
            case GEOMETRY_OPTIONS.THREE_D[1].SQUARE:
              const squareA = prompt("Unesi stranicu kvadra a: ");
              const squareB = prompt("Unesi stranicu kvadra b: ");
              const squareC = prompt("Unesi stranicu kvadra c: ");

              if(
                squareA === null ||
                squareB === null ||
                squareC === null ||
                squareA.length === 0 ||
                squareB.length === 0 ||
                squareC.length === 0
              ) return console.log(valueError);

              const sA = checkFloat(squareA);
              const sB = checkFloat(squareB);
              const sC = checkFloat(squareC);

              if(
                isNaN(sA) ||
                isNaN(sB) ||
                isNaN(sC)
              ) return console.log(notNumberError);

              console.log(`\n${operation} unetog kvadra iznosi:`);
              console.log(`a = ${squareA}\nb = ${squareB}\nc = ${squareC}`);
          
              switch(operation) {
                case "Površina":
                  const squareP = 2  * (sA * sB + sA * sC + sB * sC);
                  console.log(`2 * (a * b + a * c + b + c) = ${squareP}`);
              
                  break;
                case "Zapremina":
                  const squareZ = sA * sB * sC;
                  console.log(`a * b * c = ${squareZ}`);
              
                  break;
                default: console.log(errorMessage);
              }
              
              break;
            case GEOMETRY_OPTIONS.THREE_D[1].BALL:
              const ballR = prompt("Unesi poluprecnik lopte r: ");

              if(
                ballR === null ||
                ballR.length === 0
              ) return console.log(valueError);

              const bR = checkFloat(ballR);

              if(isNaN(bR)) return console.log(notNumberError);

              console.log(`\n${operation} unete lopte iznosi:`);
              console.log(`r = ${ballR}`);
          
              switch(operation) {
                case "Površina":
                  const ballP = 4 * Math.PI * bR * bR;
                  console.log(`4PIr² = ${ballP.toFixed(2)}`);
              
                  break;
                case "Zapremina":
                  const ballZ = 4 / 3 * Math.PI * bR * bR * bR;
                  console.log(`4/3PIr³ = ${ballZ.toFixed(2)}`);
              
                  break;
                default: console.log(errorMessage);
              }
              
              break;
            default: console.log(errorMessage);
          }
          
          break;
        default: console.log(errorMessage);
      }
      
      break;
    case OPTIONS.RANDOM_NUMBER:
      const min = parseInt(prompt("\nUnesi minimalni opseg: "));
      const max = parseInt(prompt("Unesi maksimalni opseg: "));

      console.log(`\nNa osnovu unetih vrednosti, generisan je broj u opsegu ${min} - ${max}.`);
      console.log(`Broj: ${Math.floor(Math.random() * (max - min) + min)}`);
      
      break;
    default: console.log(errorMessage);
  }
}());

function checkFloat(x) {
  let isFloat = false;
    
  for(let i = 0; i < x.length; i++) {
    if(x[i] === ".") isFloat = true;
  }

  let newX = "";

  newX = isFloat ? parseFloat(x) : parseInt(x);
  return newX;
}
