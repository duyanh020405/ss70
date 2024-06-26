const shop:any = [
    {
        name:"number1",
        id:1,
        image:'https://th.bing.com/th/id/OIP.XzUnt5Afjbz_9Bmkng2IMQHaEK?rs=1&pid=ImgDetMain',
        quantity:1,
        infor:"Bò Beefsteak, Xốt Demi-Glace (Xốt Bít Tết), Xốt Kem Chua, Phô Mai Mozzarella, Nấm, Cà Chua, Hành Tây, Bột Rong Biển"
    },
    {
        name:"number2",
        id:1,
        image:'https://www.biggerbolderbaking.com/wp-content/uploads/2023/05/Beginner-Pizza-Thumbnail-scaled.jpg',
        quantity:1,infor:"Bò Beefsteak, Xốt Demi-Glace (Xốt Bít Tết), Xốt Kem Chua, Phô Mai Mozzarella, Nấm, Cà Chua, Hành Tây, Bột Rong Biển"

    },
    {
        name:"number3",
        id:1,
        image:'https://www.biggerbolderbaking.com/wp-content/uploads/2021/02/New-York-Style-Pizza-Thumbnail1-scaled.jpg',
        quantity:1,infor:"Bò Beefsteak, Xốt Demi-Glace (Xốt Bít Tết), Xốt Kem Chua, Phô Mai Mozzarella, Nấm, Cà Chua, Hành Tây, Bột Rong Biển"

    },
    {
        name:"number4",
        id:1,
        image:'https://th.bing.com/th/id/R.e5c5f796520aee0e33c1991981a175b2?rik=OgiuVQeDa9f90A&riu=http%3a%2f%2fwww.silviocicchi.com%2fpizzachef%2fwp-content%2fuploads%2f2015%2f02%2fp-evid1.jpg&ehk=lnzdcSANVnxs8ypFpYofKhgX6gLHlE48bF2sbxLAh%2fI%3d&risl=1&pid=ImgRaw&r=0',
        quantity:1,infor:"Bò Beefsteak, Xốt Demi-Glace (Xốt Bít Tết), Xốt Kem Chua, Phô Mai Mozzarella, Nấm, Cà Chua, Hành Tây, Bột Rong Biển"

    }
]
const handleChange =(state = shop,action:any)=>{
    switch (action.type) {
        case "add":
            return [...state, action.payload]
        default:
            return state
    }
}
export default handleChange