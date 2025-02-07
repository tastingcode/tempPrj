import {useParams, useNavigate} from "react-router";
import ModifyComponent from "../../components/todo/ModifyComponent";

const ModifyPage = () => {

    const {tno} = useParams();

    const navigate = useNavigate()

    const moveToRead = () => {

        navigate({pathname: `/todo/read/${tno}`})

    }

    const moveToList = () => {

        navigate({pathname: `/todo/list`})

    }

    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Todo Modify Page
            </div>

            <ModifyComponent tno={tno}/>
        </div>
    );
}

export default ModifyPage;