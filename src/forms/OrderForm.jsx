import { HiOutlineBadgeCheck } from "react-icons/hi";
import { HiBadgeCheck } from "react-icons/hi";

export function OrderForm({ order, updateFields }) {
  console.log(order);
  return (
    <section className="w-full lg:w-3/4">
      <h2 className="text-3xl font-medium tracking-wide">
        Select your preferred website package
      </h2>

      <ul className="my-8">
        <li
          className={
            order === "Starter Package" ? "package-selected" : "package"
          }
        >
          <div
            className="select"
            onClick={() => updateFields({ order: "Starter Package" })}
          >
            {order === "Starter Package" ? (
              <HiBadgeCheck size={40} />
            ) : (
              <HiOutlineBadgeCheck size={40} />
            )}
            <p>
              Starter Package
              <span className="font-medium"> ( $799 )</span>
            </p>
          </div>
        </li>

        <li
          className={
            order === "Premium Package" ? "package-selected" : "package"
          }
        >
          <div
            className="select"
            onClick={() => updateFields({ order: "Premium Package" })}
          >
            {order === "Premium Package" ? (
              <HiBadgeCheck size={40} />
            ) : (
              <HiOutlineBadgeCheck size={40} />
            )}
            <p>
              Premium Package
              <span className="font-medium"> ( $1499 )</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
