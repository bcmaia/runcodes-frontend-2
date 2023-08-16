import { Accessor } from "solid-js";
import { css } from "../../../styled-system/css";
import FirstModal from "./FirstModal.component";
import { divider } from "../../../styled-system/patterns";
import techClickable from "../../recipes/techClickable.recipe";

const termOfUseStrongStyle = css({ textStyle: "landingBodyStrong" });
const termOfUsePStyle = css({ textStyle: "landingBody", mb: "10px" });

const TermsOfUse = (props: {
    open: Accessor<boolean>;
    onClose: () => void;
    title?: string;
    width?: string;
}) => {
    return (
        <FirstModal
            open={props.open}
            onClose={props.onClose}
            width='50%'
            margin='40px'
        >
            {/* Header */}
            <h4
                class={css({
                    display: "flex",
                    alignItems: "center",
                    textStyle: "landingSubTitle",
                    p: "15px",
                })}
            >
                Termos de Uso
                <button
                    onClick={props.onClose}
                    class={css({
                        ml: "auto",
                        fontWeight: "700",
                        lineHeight: "32px",
                        fontSize: "32px",
                        color: "gray",
                        cursor: "pointer",
                        _hover: { color: "black" },
                    })}
                >
                    ×
                </button>
            </h4>

            <div
                class={divider({ w: "100%", color: "lightgray", h: "1px" })}
            ></div>

            {/* Body */}
            <div class={css({ p: "15px" })}>
                <strong class={termOfUseStrongStyle}>
                    Esta política é aplicada a todas as páginas hospedadas no
                    domínio run.codes.
                </strong>
                <p class={termOfUsePStyle}>
                    Run.codes recomenda a leitura deste documento antes de se
                    iniciar a navegação. Ao continuar navegando por estas
                    páginas, o visitante automaticamente aceita as disposições
                    listadas a seguir:
                </p>

                <strong class={termOfUseStrongStyle}>
                    Registros de visitação:
                </strong>
                <p class={termOfUsePStyle}>
                    Para fornecer serviços melhores a todos os nossos usuários,
                    quando há um acesso ao site run.codes, são registradas as
                    seguintes informações: data e hora dos acessos; páginas
                    visitadas; tipo de navegador; endereço IP; ação que o
                    usuário tentou executar (download de um documento, por
                    exemplo) e se obteve êxito; detalhes de como você usou nosso
                    serviço; e endereço de outro site origem, caso o acesso ao
                    site run.codes ocorra por meio de link. Esses registros são
                    usuais na visitação de diversos sites da Internet.
                </p>

                <strong class={termOfUseStrongStyle}>
                    Do teor dos dados e programas submetidos:
                </strong>
                <p class={termOfUsePStyle}>
                    Ao concordar com esta política, você como usuário se
                    compromete a não submeter quaisquer programas ou dados
                    maliciosos que atentem contra a integridade do sistema
                    run.codes incluindo (porem está lista não é extensiva)
                    phishing, malwares, worms, trojans, etc. Além disso, você
                    como usuário afirma ser autor ou deter autorização para
                    envio de qualquer dado ou programa submetido ao sistema
                    run.codes.
                </p>

                <strong class={termOfUseStrongStyle}>
                    Privacidade dos dados de programas e resultados:
                </strong>
                <p class={termOfUsePStyle}>
                    Os programas submetidos ao run.codes não serão utilizados
                    sem a sua autorização prévia. Você pode solicitar, ao
                    run.codes, seu histórico de desempenho em linguagens e
                    lógica de programação a fim de certificar sua proficiência.
                </p>

                <strong class={termOfUseStrongStyle}>
                    Sobre correção automática:
                </strong>
                <p class={termOfUsePStyle}>
                    Ao se tornar um usuário do run.codes você autoriza e
                    concorda com a correção automática de qualquer programa ou
                    dado submetido ao nosso sistema.
                </p>

                <strong class={termOfUseStrongStyle}>
                    Sobre verificação de plágio:
                </strong>
                <p class={termOfUsePStyle}>
                    Ao se tornar um usuário do run.codes você autoriza e
                    concorda com a verificação de plágio, isto é, comparação de
                    seus programas ou dados, em relação a demais submissões
                    realizadas por terceiros, bem como documentos disponíveis na
                    Internet. Além disso, você autoriza o uso de seus programas
                    e dados para verificação de plágio de submissões de
                    terceiros.
                </p>

                <strong class={termOfUseStrongStyle}>
                    Política de cookies:
                </strong>
                <p class={termOfUsePStyle}>
                    O site run.codes utiliza cookies. Esses cookies são
                    utilizados para distinguir os usuários do site. A utilização
                    desses cookies permite a coleta de estatísticas de acesso,
                    ajudando-nos a oferecer uma boa experiência aos usuários do
                    site e nos permitindo realizar melhorias constantes. São
                    utilizadas, ainda, ferramentas de coleta de informações com
                    base em cookies tais como o PiWik e o Google Analytics.
                    Assim, essa política de privacidade inclui as políticas de
                    privacidade do PiWik e Google Analytics.
                </p>

                <strong class={termOfUseStrongStyle}>
                    Segurança das informações:
                </strong>
                <p class={termOfUsePStyle}>
                    Utilizamos criptografia SSL para proteger o run.codes e
                    nossos usuários com o objetivo de evitar acessos, alterações
                    e destruição de informações que detemos.
                </p>

                <strong class={termOfUseStrongStyle}>Alterações:</strong>
                <p class={termOfUsePStyle}>
                    Nossa Política de Privacidade pode ser alterada de tempos em
                    tempos. Nós não reduziremos seus direitos nesta Política de
                    Privacidade sem seu consentimento explícito. Publicaremos
                    quaisquer alterações da política de privacidade nesta página
                    e, se as alterações forem significativas, forneceremos um
                    aviso com mais destaque (incluindo, para alguns serviços,
                    notificação por e-mail das alterações da política de
                    privacidade). Também manteremos as versões anteriores desta
                    Política de Privacidade arquivadas para você visualizá-las.
                </p>

                <strong class={termOfUseStrongStyle}>Questões legais:</strong>
                <p class={termOfUsePStyle}>
                    Para dirimir eventuais conflitos relativos a esta política,
                    as partes elegem o fórum da comarcar de São Carlos, São
                    Paulo, Brasil e excluem qualquer outro por mais privilegiado
                    que seja.
                </p>
            </div>

            <div
                class={divider({ w: "100%", color: "lightgray", h: "1px" })}
            ></div>

            <div class={css({p: '15px', display: 'flex', alignItems: 'center', justifyContent: 'right'})}>
                <button 
                    onClick={props.onClose}
                    class={techClickable({color: 'red'})}
                >
                    Fechar 
                </button>
            </div>

        </FirstModal>
    );
};

export default TermsOfUse;