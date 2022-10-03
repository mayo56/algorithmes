/**
 * Fonction de trie
 */
const sortNumber = (tableau:Array<number>):Array<number> => {
    let listeSort:number[] = []
    for (let i = 0; i < tableau.length; i++){
        let temp = tableau[0] as number;
        for (let nombre in tableau){
            console.log(nombre)
            if (Number(nombre) < temp) temp = Number(nombre);
        }
        console.log(i, temp)
        const index = tableau.indexOf(temp);
        tableau.splice(index, 1);
        listeSort.push(temp);
    };
    return listeSort;
};

export default sortNumber;