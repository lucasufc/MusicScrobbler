import { Navigate, Route, Routes } from "react-router-dom"
import { useAppThemeContext, useDrawerContext } from "../shared/contexts"
import { Button } from "@mui/material"
import { useEffect } from "react"

export const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext()
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext()

    useEffect(() => {
        setDrawerOptions([
            {
                icon: "home",
                path: "/home",
                label: "Home",
            },
        ])
    })

    return (
        <Routes>
            <Route
                path="/home"
                element={
                    <Button variant="contained" color="primary" onClick={toggleTheme}>
                        Tema
                    </Button>
                }
            />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    )
}
