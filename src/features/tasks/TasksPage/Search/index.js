import Input from "../../Input";
import { useLocation, useHistory } from "react-router-dom";
import { Wrapper } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import { useReplaceQueryParameter, useQueryParameter } from "../queryParameters";

export default () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};