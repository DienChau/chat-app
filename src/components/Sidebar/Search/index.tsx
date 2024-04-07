import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosSearch } from "react-icons/io";
import styles from "./Search.module.scss";

export interface SearchTerm {
    searchTerm: string;
}
export default function Search() {
    const { register, handleSubmit } = useForm<SearchTerm>({
        defaultValues: {
            searchTerm: "",
        },
    });

    const onSubmit: SubmitHandler<SearchTerm> = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <label htmlFor="searchTerm" className={styles.icon}>
                    <IoIosSearch />
                </label>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Search Messages"
                    {...register("searchTerm")}
                />
            </div>
        </form>
    );
}
