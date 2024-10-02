import { Navigate, Route, Routes } from "react-router-dom"
import { useAppThemeContext } from "../shared/contexts"
import { Button } from "@mui/material"

export const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext()
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
