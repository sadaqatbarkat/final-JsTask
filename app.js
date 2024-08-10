let findWords = ["bat", "tap", "cat", "tab", "pat"];
  let arr = []


  function findAnagram(word1, word2){
    return word1.split('').sort().join('') == word2.split('').sort().join('')
  }

  for(let i = 0; i < findWords.length; i++){
    for(let j = i+1; j < findWords.length; j++){
        if(findAnagram(findWords[i], findWords[j])){
            arr.push([findWords[i], findWords[j]])
        }
    }
  }

  console.log(arr);