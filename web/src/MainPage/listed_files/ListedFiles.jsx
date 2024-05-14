import styles from "./ListedFiles.module.css";
import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { requestGet } from "../../lib/server";
import { useCookies } from "react-cookie";

function ListedFiles() {
  const [dirs, setDirs] = useState([]);
  const [cookie, setCookie] = useCookies(["sessionKey"]);

  useEffect(() => {
    requestGet(
      "/v1/files/list",
      (res) => {
        setDirs(res.dirs);
      },
      cookie["sessionKey"]
    );
  }, []);
  let folders = dirs;
  if (folders === undefined) {
    folders = [];
  }

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        //do something with file
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div className={styles.main_container} {...getRootProps()}>
        <h1>your files: </h1>
        <input className={styles.input_zone} {...getInputProps()} />
        <ul>
          {folders.map((dir) => (
            <li key={dir}>
              <a href="url">{dir}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListedFiles;
