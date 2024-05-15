const Contact = () => {
    return (
        <section className={"px-4 mx-auto max-w-screen-md  "}>
            <h2 className={"heading text-center "}>Contact Us</h2>
            <p className={"text-center mb-8 lg:mb-16 font-light text_para "}>Go a technical issue? Want to send feedback
                about a beta feature? let us know</p>

            <form action="" className={"space-y-8"}>
                <div>
                    <label htmlFor="" className={"form_label"}>Your email</label>
                    <input type="email" placeholder={"example@gmail.com"} className={"form_input mt-1"}/>
                </div>

                <div>
                    <label htmlFor="" className={"form_label"}>Subject</label>
                    <input type="email" placeholder={"Let us know how we can help you "} className={"form_input mt-1"}/>
                </div>

                <div className={"sm:col-span-2"}>
                    <label htmlFor="message" className={"form_label"}>Your Message</label>
                    <textarea
                        id={"message"}
                        placeholder={"Leave a comment"}
                        className={"form_input mt-1"}
                        rows={6}
                    />
                </div>

                <button className={"btn rounded sm:w-fit"}>Submit</button>

            </form>

        </section>
    )
}
export default Contact;