import { Box, Button, Card, Divider, Icon, Skeleton, useTheme } from "@mui/material"
import React from "react"

interface IEditBarProps {
    saveHandler?: () => void
    deleteHandler?: () => void
    cancelHandler?: () => void
    isLoading?: boolean
}

export const EditBar: React.FC<IEditBarProps> = ({ saveHandler, deleteHandler, cancelHandler, isLoading = false }) => {
    const theme = useTheme()

    return (
        <Box
            gap={1}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            height={theme.spacing(5)}
            component={Card}
        >
            {!isLoading && (
                <Button
                    color="secondary"
                    disableElevation
                    variant="contained"
                    startIcon={<Icon>add</Icon>}
                    onClick={saveHandler}
                >
                    Save
                </Button>
            )}
            {isLoading && <Skeleton width={110} height={60} />}
            {!isLoading && (
                <Button
                    color="secondary"
                    disableElevation
                    variant="outlined"
                    startIcon={<Icon>delete</Icon>}
                    onClick={deleteHandler}
                >
                    Delete
                </Button>
            )}
            {isLoading && <Skeleton width={110} height={60} />}
            <Divider variant="middle" orientation="vertical" />
            <Button
                color="secondary"
                disableElevation
                variant="outlined"
                startIcon={<Icon>cancel</Icon>}
                onClick={cancelHandler}
            >
                Cancel
            </Button>
        </Box>
    )
}
