import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
export function InputWithIcon(props) {
  console.log(props);

  return (
    <div className="w-full flex flex-col items-start">
      <label className=" text-zinc-100 text-base font-semibold mb-3">
        {props.label}
      </label>
      <div className="flex items-center gap-3 bg-zinc-800 py-4 px-3 w-full rounded focus-within:ring-2 ring-yellow-300">
        {props.label === "E-mail" && (
          <MailOutlineIcon className="text-zinc-400" />
        )}
        {props.label === "Senha" && (
          <LockOutlinedIcon className="text-zinc-400" />
        )}
        {props.label === "Nome" && (
          <AccountBoxOutlinedIcon className="text-zinc-400" />
        )}
        {props.label === "Função" && (
          <WorkOutlineOutlinedIcon className="text-zinc-400" />
        )}
        {props.type === "select" ? (
          <select
            id={props.id}
            onChange={props.onChange}
            className="bg-transparent border-none  text-gray-900 text-sm font-bold rounded-none block w-full bg-zinc-800 dark:text-white dark:focus:outline-none dark:focus:border-zinc-500 hover:bg-zinc-800"
          >
            {props.value.map((item, index) => {
              return (
                <option
                  key={index}
                  value={item.value}
                  className="text-zinc-400 "
                >
                  {item.label}
                </option>
              );
            })}
          </select>
        ) : (
          <input
            name={props.name}
            id={props.id}
            type={props.type}
            autoComplete={props.autoComplete}
            value={props.value}
            onChange={props.onChange}
            className={
              "bg-transparent border-none flex-1 text-zinc-100 placeholder:text-zinc-400 font-bold rounded-none outline-none text-sm m-0 pr-2"
            }
            placeholder={props.placeholder}
          />
        )}
      </div>
    </div>
  );
}
