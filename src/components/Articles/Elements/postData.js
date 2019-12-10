import React from "react";
import moment from "moment";

import styles from "../articles.module.css";

const formateDate = date => {
  return moment(date).format(" MM-DD-YYYY");
};

const postData = props => (
  <div className={styles.articlePostData}>
    <div>
      Date:
      <span>{formateDate(props.date)}</span>
    </div>
    <div>
      Author:
      <span>{props.data.author}</span>
    </div>
  </div>
);

export default postData;
