func canConstruct(ransomNote string, magazine string) bool {


    Map1 := make(map[string]int)
    // Map2 := make(map[string]int)

    for _,value := range magazine {
        Map1[string(value)] += 1
    }

    for _,value := range ransomNote{
     val := string(value)
    
     _,exists := Map1[val]
    
    if Map1[val] == 0 || !exists {
        return false
    }
    
    Map1[val] -= 1


    }
    return true

}
