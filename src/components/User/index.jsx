import React from "react";

export default ({ user }) => (
    <li>
        firstName: {user.firstName}, lastName: {user.lastName}, fullName: {user.firstName + " " + user.lastName}, age: {user.age + 5}, job: {user.job}           

    </li>
);
