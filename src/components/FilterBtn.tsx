import { Button } from "@mui/material";
import React from "react";

interface FilterBtnProps {
    name: string;
    setFilter: (filter: string) => void;
    isPressed: boolean;
}

export default function FilterBtn({ name, setFilter }: FilterBtnProps): JSX.Element {
    return (
        <Button
            type='button'
            onClick={() => setFilter(name)}
            variant="outlined"
            color='warning'
            sx={{ marginLeft: '15px', color: '#eb5e28', borderColor: '#eb5e28' }}
        >
            {name}
        </Button>
    );
}
