              //   <>
              //   {list &&
              //     list.map((text, index) => {
              //       return (
              //         <div className={styles.task_block}>
              //           <div
              //             className={styles.done_section}
              //           >
              //             <input
              //               type="checkbox"
              //               className={styles.wait}
              //               defaultChecked={text.isDone}
              //               onChange={() => toggleDone(text._id, text.isDone)}
              //             />
              //             <div className={styles.ner1}>
              //               <div className={styles.text_npt}>
              //                 <input
              //                   className={styles.input_value}
              //                   value={text.todo}
              //                 ></input>
              //               </div>
              //             </div>
              //           </div>
              //           <div className={styles.btns}>
              //           <button
              //               className={styles.edit}
              //               onClick={() => {
              //                 UpdateMood(text._id, text.todo);
              //               }}
              //             >
              //               edit
              //             </button>
              //             <button
              //               className={styles.delete}
              //               onClick={() => {
              //                 Delete(text._id);
              //               }}
              //             >
              //               delete
              //             </button>
              //           </div>
              //         </div>
              //       );
              //     })}
              //   {list && list.length === 0 && (
              //     <div className={styles.none_flex}>
              //       <div className={styles.none_card}>
              //         Have no completed tasks{" "}
              //         <FaSmileWink className={styles.smile} />
              //       </div>
              //     </div>
              //   )}
              // </>