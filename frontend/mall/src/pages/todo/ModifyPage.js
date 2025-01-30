import {useNavigate} from "react-router";

const ModifyPage = ({tno}) => {

    const navigate = useNavigate()

    const moveToRead = () => {

        navigate({pathname:`/todo/read/${tno}`})

    }

    const moveToList = () => {

        navigate({pathname:`/todo/list`})

    }

    return (
        <div className="text-3xl font-extrabold">
            Todo Modify Page
        </div>
    );
}

export default ModifyPage;