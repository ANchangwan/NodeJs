
export const getLogin = (req, res) =>{
    
    return res.render("login");
}
export const postLogin = (req, res) =>{
    
    const {id, password} = req.body;
    console.log(id, password);

    return res.redirect("/login");
}


export const main = (req, res) =>{
    return res.render("main");
}

export const join = (req, res) =>{
    return res.send("join");
}