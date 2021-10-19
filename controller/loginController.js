import User from "../models/User";
export const getLogin = (req, res) =>{
    
    return res.render("login", {pageTitle:"login"});
}
export const postLogin = async (req, res) =>{
    
    const {id, password} = req.body;
    const exists = await User.findOne({id, password});

    if(exists){
        return res.status(200).render("main",{pageTitle:"main"});
    }else{
        return res.status(400).render("join",{pageTitle:"join",errorMessage:"없는 계정입니다."});
    }

}

export const getJoin = (req, res) =>{
    return res.render("join");
}

export const postJoin = async (req, res) =>{
    const {
        id,
        password1, 
        password2, 
        username
    } = req.body;
    const exists = await User.exists({$or:[{username}]});
    console.log(id, password1, password2, username);
    console.log(exists);
    if (password1 !== password2){
        return res.redirect("/join");
    }
    if(exists){
        return res.status(400).render("join", {pageTtiel:"join", errorMessage:`이미 존재하는 계정입니다.`});
    }
    await User.create({
        id,
        password:password1,
        username
    });
    await User.save();

    return res.redirect("/login");
}


export const main = (req, res) =>{
    return res.render("main");
}

export const join = (req, res) =>{
    return res.send("join");
}