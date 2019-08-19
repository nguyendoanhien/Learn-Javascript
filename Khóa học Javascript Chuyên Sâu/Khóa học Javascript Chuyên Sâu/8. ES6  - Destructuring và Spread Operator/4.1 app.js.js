

// input -> output

function sayHi(  ){
    return { 
        en: 'Hello',
        vn: 'Xin Chao',
        cn: 'Chao Xin',
        sp: 'Hola'
    }
}

const { en: english, vn: vietnamese  } = sayHi()

var names = ['Khoa','Hung','Khoi']

function logInfo( [first,second,third] = [] ){
    
    console.log(`Hello ${first} ${second} ${third} `  )
}

logInfo(names)


function ham( {  } ) {
    { }
}

ham(obj)