import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import _ from "lodash";

function useFlip(currentSideUp = true) {
  const [isFacingUp, setIsFacingUp] = useState(currentSideUp);
  const flipCard = () => {
    setIsFacingUp((isUp) => !isUp);
  };
  return [isFacingUp, flipCard];
}

function useAxios(baseUrl) {
  const [dataArray, setDataArray] = useState([]);
  async function dataArrayAppend(urlItem = "") {
    const response = await axios.get(baseUrl + urlItem);
    let cloneArray = _.cloneDeep(dataArray);
    cloneArray.push({ ...response.data, id: uuid() });
    setDataArray(cloneArray);
  }
  return [dataArray, dataArrayAppend];
}

export { useFlip, useAxios };
