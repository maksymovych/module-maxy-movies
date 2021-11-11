import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import MyButton from "../../ui/buttons/MyButton/MyButton";
import AutocompliteInput from "../../ui/inputs/AutocompliteInput/AutocompliteInput";
import { langusgesList } from "../../../data";
import { changeSearchFields, fetchMovies } from "../../../store/redusers";
import ToggleButtons from "../../ui/buttons/ToggleButtons/ToggleButtons";
import { genresList } from "../../../data/index";

function SortCard() {
  const dispatch = useDispatch();
  const [language, setLanguage] = useState("");
  const [genres, setGenres] = React.useState(() => []);

  const onGenresChange = (_, genresArr) => {
    setGenres(genresArr);
  };
  const onChangeLanguage = (value) => {
    setLanguage(value);
  };

  const onSearchClick = () => {
    const genresString = genres.join();
    dispatch(fetchMovies({ page: 1, language, genres: genresString }));
    dispatch(changeSearchFields({ language, genres: genresString }));
  };

  return (
    <Card sx={{ width: { sm: "450px" }, m: "0 20px 20px" }}>
      <Typography align="center" sx={{ my: 1.5 }} variant="h5">
        Sort
      </Typography>
      <Divider />

      <CardContent>
        <ToggleButtons
          genresList={genresList}
          genres={genres}
          onGenresChange={onGenresChange}
        />
      </CardContent>
      <Divider />
      <CardContent>
        <Typography sx={{ mx: 1.5 }} variant="subtitle1">
          Language
        </Typography>

        <AutocompliteInput
          onChange={onChangeLanguage}
          langusgesList={langusgesList}
        />
      </CardContent>
      <CardActions>
        <MyButton
          sx={{ m: "0 10px 10px" }}
          onClick={onSearchClick}
          size="smale"
        >
          Search...
        </MyButton>
      </CardActions>
    </Card>
  );
}

export default SortCard;
