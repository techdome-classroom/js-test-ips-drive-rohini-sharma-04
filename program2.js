function longestSubstring(s) {


    // Implementation of longestSubstring function
    let longestSubstringLength = 0 ;
    for(let i=0 ; i<s.length; i++){
        let currentStringSet = new Set() ;
        for(let x=i ; x<s.length() ; i++){
            if(currentStringSet.has(s[x])){
                break ;
            }
            else{
                currentStringSet.add(s[x]) ;
            }
        }

        longestSubstringLength = Math.max(longestSubstringLength , currentStringSet.size) ;
    }
}

module.exports = { longestSubstring };
