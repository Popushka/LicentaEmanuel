import React, { useState } from "react"
import style from "./index.module.css"
import {
    Fab,
    makeStyles
} from "@material-ui/core"
import Create from "@material-ui/icons/Create"
import LocalHospital from "@material-ui/icons/LocalHospital"
import DialogSelection from "./Components/DialogSelection"
import DialogSlider from "./Components/DialogSlider"
import LinearGradient from "./Components/LinearGradient"
import BodyAnt from "./Components/BodyAnt"
import BodyPost from "./Components/BodyPost"
import Header from "./Components/Header"

const useStyles = makeStyles(theme => ({
    fabEdit: {
        position: 'fixed',
        zIndex:100,
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabDouleur: {
        position: 'fixed',
        zIndex:100,
        bottom: theme.spacing(2),
        right: theme.spacing(11),
    }
}));

const BodyMap = () => {
    const classes = useStyles()
    const [state, setState] = useState([])
    const [value, setValue] = useState(5)
    const [name, setName] = useState("")
    const [mode, setMode] = useState("selection")

    const handleClickBody = newValue => {
        if (mode === "selection" && !state.some(item => item.name === newValue)) {
            setValue(5)
            setName(newValue)
        }
    }
    
    const handleChangeSlider = (e, newValue) => {
        setValue(newValue)
        setState(state => state.map((item, index) => {
            if (item.name === name) {
                return {
                    ...item,
                    val: newValue
                }
            }
            return item
        }))
    }

    const handleClickSaisir = () => {
        setMode("saisie")
        setState([...state, { name: name, val: 5 } ])
    }

    const handleCancel = () => {
        setMode("selection")
        setName("")
        setState(state => state.filter(d => d.name !== name))
    }

    const handleSubmit = () => {
        setMode("selection")
        setName("")
        setValue(5)
    }

    return (
        <div className={style.root}>
           <Header douleur={name} />
           <LinearGradient />
            <div className={style.container}>
                <BodyAnt
                    tooltip
                    selected={name}
                    selectionItems={state}
                    handleClickBody={membre => handleClickBody(membre)}
                />
                <BodyPost 
                    tooltip
                    selected={name}
                    selectionItems={state}
                    handleClickBody={membre => handleClickBody(membre)}
                />
            </div>

            <div>
                <Fab 
                    className={classes.fabEdit} 
                    onClick={handleClickSaisir} 
                    disabled={name === "" || mode === "saisie"}
                >
                    <Create />
                </Fab>

                <Fab 
                    className={classes.fabDouleur} 
                    onClick={() => setMode("check")} 
                    disabled={state.length === 0 || mode === "saisie"}
                >
                    <LocalHospital />
                </Fab>
            </div>

            <div>
                <DialogSelection open={mode === "check"} items={state} handleClose={() => setMode("selection")} />

                <DialogSlider 
                    open={mode === "saisie"}
                    handleClose={handleCancel}
                    douleur={name}
                    intensity={value} // donc ici on passe le state value dans la props intensity
                    handleChange={handleChangeSlider}
                    handleCancel={handleCancel}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

export default BodyMap