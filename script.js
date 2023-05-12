let elems = document.getElementById("mainform").children

function setNonDisplay(value){
    let num = 0;
    Number.isInteger(value) ? num = value : num = this.id[2]

    if (checkAns(num)){
        document.getElementById(`q${num}`).style.display = "none"
        if(Number(num) === 5) return
            document.getElementById(`q${Number(num)+1}`).style.display = "flex"
    }
}
       

function checkAns(num){
    let text = document.getElementById(`codeword${num}`).value
    let normAns = text.toLowerCase()
    let responseJoke = ""
    if(Number(num) === 1 && "жмых" === normAns) return true
    if(Number(num) === 2 && ("йегер" === normAns || "егерь" == normAns || "йегерь" == normAns)) return true
    if(Number(num) === 3 && "у" === normAns) return true
    if(Number(num) === 4 && "спайк" === normAns) return true
    if(Number(num) === 5 && "сурьма" === normAns) {
        document.getElementById("q6").style.display = "flex"
        return true
    }

    if(Number(num) === 3) document.getElementById("hint").style.display = "flex"

    if(Number(num) === 5 && "рустам" === normAns){
        responseJoke = "Не слишком ли просто?"
    }
    else if(Number(num) === 5 && "матсур" === normAns){
        responseJoke = "В углу погибла грусть, а Дмитрий был съёжан в атом."
    }
    else if(Number(num) === 5 && "русский" === normAns){
        responseJoke = "С этим никто не спорит..."
    }
    else if(Number(num) === 5 && "русак" === normAns){
        responseJoke = "Зайцов много - денег мало..."
    }
    else responseJoke = "Согласен, правила созданы для контроля Влада. Тут больше по полуметаллам."

    if(Number(num) === 5){
        hint5 = document.getElementById("hint5")
        hint5.innerText = responseJoke
        hint5.style.display = "flex"
    }
    

    return false
   
}

for(let i = 1; i < 6; i++)
    document.getElementById(`qb${i}`).addEventListener('click', setNonDisplay)

for(let i = 1; i < 6; i++)
    document.getElementById(`codeword${i}`).addEventListener('keydown', function(e) {
        if (String(e.key) === "Enter") {
            setNonDisplay(i)
        }
    });


let vid = document.getElementById("vid")
vid.addEventListener('progress', function() {
    if( vid.buffered.length === 0 ){
       vid.load();
       return ;
    }
 
    var loadedPercentage = vid.buffered.end(0) / vid.duration;
    if(loadedPercentage > 1){
       start()
    } else {
       vid.currentTime=vid.buffered.end(0);
    }
 });


document.getElementById("send").onclick = () => {window.location.href = "https://www.youtube.com/watch?v=g3K9jNZu5Z0&ab_channel=Boba"}