import { Box, Button, Card, Icon, InputAdornment, TextField, useTheme } from "@mui/material"

interface iToolbarProps {
    searchValue?: string
    showSearchField?: boolean
    showButton?: boolean
    buttonLabel?: string
    buttonAction?: () => void
    searchHandler?: (value: string) => void
}

export const Toolbar: React.FC<iToolbarProps> = ({
    searchValue = "",
    showSearchField = false,
    searchHandler,
    showButton = true,
    buttonLabel = "New Scrobble",
    buttonAction,
}) => {
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
            {showSearchField && (
                <TextField
                    size="small"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => searchHandler?.(e.target.value)}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Icon>search</Icon>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            )}
            {showButton && (
                <Box flex={1} display="flex" justifyContent="end" alignItems="center">
                    <Button
                        color="secondary"
                        disableElevation
                        variant="contained"
                        onClick={buttonAction}
                        endIcon={<Icon>add</Icon>}
                    >
                        {buttonLabel}
                    </Button>
                </Box>
            )}
        </Box>
    )
}
