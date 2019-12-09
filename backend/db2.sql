--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 11.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: inventory; Type: TABLE; Schema: public; Owner: Flip
--

CREATE TABLE public.inventory (
    id integer NOT NULL,
    item character varying,
    cost character varying,
    photo character varying,
    stock character varying
);


ALTER TABLE public.inventory OWNER TO "Flip";

--
-- Name: Inventory_id_seq; Type: SEQUENCE; Schema: public; Owner: Flip
--

CREATE SEQUENCE public."Inventory_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Inventory_id_seq" OWNER TO "Flip";

--
-- Name: Inventory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Flip
--

ALTER SEQUENCE public."Inventory_id_seq" OWNED BY public.inventory.id;


--
-- Name: cards; Type: TABLE; Schema: public; Owner: Flip
--

CREATE TABLE public.cards (
    id integer NOT NULL,
    full_name character varying,
    card_number character varying,
    exp_date character varying,
    cvv character varying,
    member_id integer
);


ALTER TABLE public.cards OWNER TO "Flip";

--
-- Name: cards_id_seq; Type: SEQUENCE; Schema: public; Owner: Flip
--

CREATE SEQUENCE public.cards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cards_id_seq OWNER TO "Flip";

--
-- Name: cards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Flip
--

ALTER SEQUENCE public.cards_id_seq OWNED BY public.cards.id;


--
-- Name: employees; Type: TABLE; Schema: public; Owner: Flip
--

CREATE TABLE public.employees (
    id integer NOT NULL,
    name character varying,
    email character varying,
    phone character varying,
    password character varying
);


ALTER TABLE public.employees OWNER TO "Flip";

--
-- Name: employees_id_seq; Type: SEQUENCE; Schema: public; Owner: Flip
--

CREATE SEQUENCE public.employees_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employees_id_seq OWNER TO "Flip";

--
-- Name: employees_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Flip
--

ALTER SEQUENCE public.employees_id_seq OWNED BY public.employees.id;


--
-- Name: members; Type: TABLE; Schema: public; Owner: Flip
--

CREATE TABLE public.members (
    id integer NOT NULL,
    name character varying,
    email character varying,
    age integer,
    phone character varying,
    status character varying,
    waiver character varying,
    contract character varying,
    date_joined character varying,
    card_id integer
);


ALTER TABLE public.members OWNER TO "Flip";

--
-- Name: members_id_seq; Type: SEQUENCE; Schema: public; Owner: Flip
--

CREATE SEQUENCE public.members_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.members_id_seq OWNER TO "Flip";

--
-- Name: members_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Flip
--

ALTER SEQUENCE public.members_id_seq OWNED BY public.members.id;


--
-- Name: sales; Type: TABLE; Schema: public; Owner: Flip
--

CREATE TABLE public.sales (
    id integer NOT NULL,
    item_id integer,
    cost character varying,
    member_id integer,
    employee_id integer
);


ALTER TABLE public.sales OWNER TO "Flip";

--
-- Name: sales_id_seq; Type: SEQUENCE; Schema: public; Owner: Flip
--

CREATE SEQUENCE public.sales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sales_id_seq OWNER TO "Flip";

--
-- Name: sales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Flip
--

ALTER SEQUENCE public.sales_id_seq OWNED BY public.sales.id;


--
-- Name: tasks; Type: TABLE; Schema: public; Owner: Flip
--

CREATE TABLE public.tasks (
    id integer NOT NULL,
    task_info character varying,
    employee_id integer,
    member_id integer
);


ALTER TABLE public.tasks OWNER TO "Flip";

--
-- Name: tasks_id_seq; Type: SEQUENCE; Schema: public; Owner: Flip
--

CREATE SEQUENCE public.tasks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tasks_id_seq OWNER TO "Flip";

--
-- Name: tasks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Flip
--

ALTER SEQUENCE public.tasks_id_seq OWNED BY public.tasks.id;


--
-- Name: cards id; Type: DEFAULT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.cards ALTER COLUMN id SET DEFAULT nextval('public.cards_id_seq'::regclass);


--
-- Name: employees id; Type: DEFAULT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.employees ALTER COLUMN id SET DEFAULT nextval('public.employees_id_seq'::regclass);


--
-- Name: inventory id; Type: DEFAULT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.inventory ALTER COLUMN id SET DEFAULT nextval('public."Inventory_id_seq"'::regclass);


--
-- Name: members id; Type: DEFAULT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.members ALTER COLUMN id SET DEFAULT nextval('public.members_id_seq'::regclass);


--
-- Name: sales id; Type: DEFAULT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.sales ALTER COLUMN id SET DEFAULT nextval('public.sales_id_seq'::regclass);


--
-- Name: tasks id; Type: DEFAULT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.tasks ALTER COLUMN id SET DEFAULT nextval('public.tasks_id_seq'::regclass);


--
-- Data for Name: cards; Type: TABLE DATA; Schema: public; Owner: Flip
--

COPY public.cards (id, full_name, card_number, exp_date, cvv, member_id) FROM stdin;
\.


--
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: Flip
--

COPY public.employees (id, name, email, phone, password) FROM stdin;
\.


--
-- Data for Name: inventory; Type: TABLE DATA; Schema: public; Owner: Flip
--

COPY public.inventory (id, item, cost, photo, stock) FROM stdin;
\.


--
-- Data for Name: members; Type: TABLE DATA; Schema: public; Owner: Flip
--

COPY public.members (id, name, email, age, phone, status, waiver, contract, date_joined, card_id) FROM stdin;
1	felipe	\N	\N	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: sales; Type: TABLE DATA; Schema: public; Owner: Flip
--

COPY public.sales (id, item_id, cost, member_id, employee_id) FROM stdin;
\.


--
-- Data for Name: tasks; Type: TABLE DATA; Schema: public; Owner: Flip
--

COPY public.tasks (id, task_info, employee_id, member_id) FROM stdin;
\.


--
-- Name: Inventory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Flip
--

SELECT pg_catalog.setval('public."Inventory_id_seq"', 1, false);


--
-- Name: cards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Flip
--

SELECT pg_catalog.setval('public.cards_id_seq', 1, false);


--
-- Name: employees_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Flip
--

SELECT pg_catalog.setval('public.employees_id_seq', 1, false);


--
-- Name: members_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Flip
--

SELECT pg_catalog.setval('public.members_id_seq', 1, true);


--
-- Name: sales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Flip
--

SELECT pg_catalog.setval('public.sales_id_seq', 1, false);


--
-- Name: tasks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Flip
--

SELECT pg_catalog.setval('public.tasks_id_seq', 1, false);


--
-- Name: inventory Inventory_pkey; Type: CONSTRAINT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.inventory
    ADD CONSTRAINT "Inventory_pkey" PRIMARY KEY (id);


--
-- Name: cards cards_pkey; Type: CONSTRAINT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.cards
    ADD CONSTRAINT cards_pkey PRIMARY KEY (id);


--
-- Name: employees employees_pkey; Type: CONSTRAINT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (id);


--
-- Name: members members_pkey; Type: CONSTRAINT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.members
    ADD CONSTRAINT members_pkey PRIMARY KEY (id);


--
-- Name: sales sales_pkey; Type: CONSTRAINT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_pkey PRIMARY KEY (id);


--
-- Name: tasks tasks_pkey; Type: CONSTRAINT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_pkey PRIMARY KEY (id);


--
-- Name: cards cards_member_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.cards
    ADD CONSTRAINT cards_member_id_fkey FOREIGN KEY (member_id) REFERENCES public.members(id);


--
-- Name: members members_card_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.members
    ADD CONSTRAINT members_card_id_fkey FOREIGN KEY (card_id) REFERENCES public.cards(id);


--
-- Name: sales sales_employee_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_employee_id_fkey FOREIGN KEY (employee_id) REFERENCES public.employees(id);


--
-- Name: sales sales_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.inventory(id);


--
-- Name: sales sales_member_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_member_id_fkey FOREIGN KEY (member_id) REFERENCES public.members(id);


--
-- Name: tasks tasks_employee_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_employee_id_fkey FOREIGN KEY (employee_id) REFERENCES public.employees(id);


--
-- Name: tasks tasks_member_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: Flip
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_member_id_fkey FOREIGN KEY (member_id) REFERENCES public.members(id);


--
-- PostgreSQL database dump complete
--

