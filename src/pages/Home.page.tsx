import { For, createSignal } from "solid-js";
import { css } from "../../styled-system/css";
import RunPanel from "../components/RunPanel";
import runClickable from "../recipes/runClickable.recipe";
import { A } from "@solidjs/router";

const UpcommingDeadlines = () => {
    return (
        <RunPanel title='Próximas Entregas' width='' margin='10px'>
            <p class={css({ mt: "5px", mb: "15px" })}>
                Você não tem exercícios para submeter nos próximos dias
            </p>
        </RunPanel>
    );
};

const SubjectLI = (props: {
    subject: { subjectCod: string; name: string; offeringCod: string };
}) => {
    return (
        <li
            class={css({
                borderBottom: "solid 1px lightgray",
                w: "100%",
                textAlign: "center",
            })}
        >
            <table
                class={css({ borderSpacing: "0", borderCollapse: "collapse" })}
            >
                <tbody>
                    <tr>
                        <td
                            class={css({
                                textAlign: "center",
                                p: "15px 15px 15px 35px",
                            })}
                        >
                            {props.subject.subjectCod}
                        </td>
                        <td
                            class={css({
                                textAlign: "left",
                                w: "100%",
                                p: "15px",
                            })}
                        >
                            {props.subject.name}
                        </td>
                        <td class={css({ whiteSpace: "nowrap", p: "15px" })}>
                            <A
                                href={`/offerings/view/${props.subject.offeringCod}`}
                                class={runClickable()}
                            >
                                Ver Página da Disciplina
                            </A>
                        </td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
};

const SubjectList = (props: { subjects: any[] }) => {
    return (
        <ul class={css({ w: "100%" })}>
            <For each={props.subjects}>
                {(subject) => <SubjectLI subject={subject} />}
            </For>
        </ul>
    );
};

const MySubjects = (props: { subjects: any[] }) => {
    return (
        <RunPanel title='Minhas Disciplinas' margin='10px' padding='0'>
            <SubjectList subjects={props.subjects} />
            <div class={css({ p: "20px 15px" })}>
                <A href='/Offerings/my' class={runClickable({ size: "md" })}>
                    Ver Turmas Antigas
                </A>
            </div>
        </RunPanel>
    );
};

const enrollmentInputStyle = css({
    rounded: "6px",
    p: "10px 16px",
    h: "46px",
    border: "1px solid #ccc",

    fontSize: "18px",
    fontWeight: "600",
    color: "#444",

    transition: "border-color ease-in-out .15s,box-shadow ease-in-out .15s",
    _focus: {
        borderColor: "#66afe9",
        boxShadow:
            "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)",
        outline: "0",
    },
});

const EnrollmentForm = () => {
    const INPUT_MAX_LEN = 4;
    const [, setInputValue] = createSignal<string>("");
    const saveInputValue = (val: string) => {
        const v = val.replace("_", "");
        if (v.length <= INPUT_MAX_LEN) setInputValue(v);
    };

    return (
        <form
            action=''
            id='EnrollmentAddForm'
            method='post'
            accept-charset='utf-8'
            data-form-type='other'
            class={css({
                display: "flex",
                flexDir: "column",
                textAlign: "left",
                "& > *": { mt: "10px" },
            })}
        >
            <label for='EnrollmentEnrollmentCode'> Código de Matrícula: </label>

            {/* NOTE: I could not perfectly replicate the place holder behavior
                found in the original runcodes for this input. So,
                the "____" placeholder is a little different.
            */}
            <input
                name='data[Enrollment][enrollment_code]'
                data-mask='wwww'
                type='text'
                id='EnrollmentEnrollmentCode'
                data-form-type='other'
                class={enrollmentInputStyle}
                placeholder={"_".repeat(INPUT_MAX_LEN)}
                onChange={(event) => saveInputValue(event.target.value)}
                maxLength={`${INPUT_MAX_LEN}`}
            />

            <p>
                Se você não sabe o código de matrícula da sua turma, contate o
                seu professor
            </p>

            <input
                class={runClickable({ size: "md" })}
                type='submit'
                value='Matricular'
                data-dashlane-rid='eee44f30e259fcfc'
                data-form-type='action'
            />
        </form>
    );
};

const NewEnrollment = () => {
    return (
        <RunPanel title='Nova Matrícula' margin='10px'>
            <EnrollmentForm />
        </RunPanel>
    );
};

const HomePage = () => {
    const subjects = [
        {
            subjectCod: "SCP6669",
            name: "O Curso - Turma B",
            offeringCod: "21",
        },
    ];

    return (
        <>
            <div
                class={css({
                    p: "0 5px",
                })}
            >
                <UpcommingDeadlines />
                <div
                    class={css({
                        display: "flex",
                        alignItems: "initial",
                        flexDirection: { base: "column", lg: "row" },
                        "& > *": {
                            boxSizing: "border-box",
                            w: { base: "100%", lg: "50%" },
                        },
                    })}
                >
                    <MySubjects subjects={subjects} />
                    <NewEnrollment />
                </div>
            </div>
        </>
    );
};

export default HomePage;
