import styles from "./ListedFiles.module.css";
import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { requestGet } from "../../lib/server";
import { useCookies } from "react-cookie";

function ListedFiles() {
  const [dirs, setDirs] = useState([]);
  const [files, setFiles] = useState([]);
  const [cookie, setCookie] = useCookies(["sessionKey"]);

  useEffect(() => {
    requestGet(
      "/v1/files/list",
      (res) => {
        setDirs(res.dirs);
        setFiles(res.files);
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
      <div className={styles.main_container}>
        <div className={styles.top_container}>
          <p className={styles.paragraph}>your files:</p>

          <div className={styles.button_style} {...getRootProps()}>
            <input {...getInputProps()} />
            <p>drop</p>
          </div>
        </div>
        <div className={styles.file_list}>
          <ul>
            {folders.map((dir) => (
              <li className={styles.file_list_stylization} key={dir}>
                <span class="material-symbols-outlined">folder</span>
                {dir}
              </li>
            ))}
            {files.map((file) => (
              <li className={styles.file_list_stylization} key={file}>
                <span class="material-symbols-outlined">draft</span>
                {file}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ListedFiles;
