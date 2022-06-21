class GiftExchange {

    static pairs(names){

        if (names.length % 2 == 0){
            let pairs = []

            let numOfPairs = names.length / 2 
            let usedNames =[]

            let name1 = names[Math.floor(Math.random() * (names.length -1))]
            let name2 = names[Math.floor(Math.random() * (names.length -1))]

            for (let i = 0; i < numOfPairs; i++){
                
                if (usedNames.includes(name1)){
                    name1 = names[Math.floor(Math.random() * (names.length -1))]
                    i = i - 1
                }
                else if (usedNames.includes(name2)){
                    name2 = names[Math.floor(Math.random() * (names.length -1))]
                    i = i - 1
                }
                else if (name1 === name2){
                    name1 = names[Math.floor(Math.random() * (names.length -1)) +1]
                    i = i - 1
                }
                else {
                    usedNames.push(name1)
                    usedNames.push(name2)
                    pairs.push([name1,name2])
                }
            }
            return pairs
        }
        else {
            throw new Error("The number of names can't be odd.")
        }
    }

        static traditional (names) {
            function traditional(names) {
                let stringArray = []
                let numOfNames = names.length
                let usedNames = []
                let sentence = " is giving a gift to "
                
                // FIRST NAME grabbed
                let initialName1 = names[Math.floor(Math.random() * (names.length -1))]
                
                // GRAB RANDOM NAME
                let randomName = names[Math.floor(Math.random() * (names.length -1))]
                
                // MAKE SURE WE GET DIFF STARTING NAMES
                while (initialName1 === randomName) {
                    randomName = names[Math.floor(Math.random() * (names.length -1))]
                }
                console.log(initialName1)
                
                
                console.log(randomName)
        
                for (let i=0; i<numOfNames; i++) {
                    if (usedNames.includes(randomName)) {
                        randomName = names[Math.floor(Math.random() * (names.length -1))]
                        i = i-1            
                    }
                    
                    if (usedNames.length === 0) {
                        let newSentence = initialName1 + sentence + randomName
                        stringArray.push(newSentence)
                        usedNames.push(initialName1)
                        initialName1 = randomName
                        usedNames.push(randomName)
                    }
                    else if (usedNames.length === names.length) {
                        let lastUsedName = usedNames[(usedNames.length)-1]
                        let newSentence = lastUsedName + sentence + usedNames[0]
                        stringArray.push(newSentence)
                    }
                    else {
                        let lastUsedName = usedNames[(usedNames.length)-1]
                        let newSentence = lastUsedName + sentence + randomName
                        stringArray.push(newSentence)
                        usedNames.push(randomName)
                    }
                }
        
                return stringArray
            }
        }
    }
module.exports = GiftExchange
