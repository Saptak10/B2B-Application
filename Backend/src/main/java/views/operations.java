package views;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.sql.Date;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import controller.JDBC_DAO;
import model.JDBC;

@WebServlet("/")
public class operations extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private JDBC_DAO jdbc_DAO;

	public operations() {
		this.jdbc_DAO=new JDBC_DAO();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String action=request.getServletPath();

		switch(action)
		{
		//		case "/new":
		//			newForm(request,response);
		//			break;
		case "/insert":
			try {	
				insertRecord(request, response);	
			} 	
			catch (Exception e) {	
				e.printStackTrace();	
			}	
			break;	
		case "/delete":	
			try {	
				deleteRecords(request, response);	
			} catch (Exception e) {	
				e.printStackTrace();	
			}	
			break;	
		case "/update":	
			try {	
				updateRecord(request, response);	
			} catch (Exception e) {	
				// TODO Auto-generated catch block	
				e.printStackTrace();	
			}	
			break;	
//		case "/selectSpecial":	
//			try {	
//				selectSpecial(request,response);	
//			}	
//			catch (Exception e) {	
//				e.printStackTrace();	
//			}	
		default:	
			try {	
				allRecords(request, response);	
			} catch (Exception e) {	
				// TODO Auto-generated catch block	
				e.printStackTrace();	
			}	
			break;	
		}	
	}	
//	private void selectSpecial(HttpServletRequest r, HttpServletResponse response) throws Exception {	
//		String dId=r.getParameter("docID");	
//		String invId=r.getParameter("invID");	
//		String custN=r.getParameter("custNumber");	
//		String bYear=r.getParameter("bYear");	
//		Gson gson=new Gson();	
//		List<JDBC> sRecords=jdbc_DAO.selectSpecialRecords(dId,invId,bYear,custN);	
//		String jsonResponse = gson.toJson(sRecords);	
//		PrintWriter printWriter=response.getWriter();	
//		response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");	
//		response.setContentType("application/json");	
//		response.setCharacterEncoding("UTF-8");	
//		printWriter.write(jsonResponse);	
//		printWriter.close();	
//	}
	
	private void deleteRecords(HttpServletRequest r, HttpServletResponse response) throws Exception {
		int s=Integer.parseInt(r.getParameter("id"));
		System.out.println(s);
		
		Gson gson=new Gson();

		
		String jsonResponse = gson.toJson(jdbc_DAO.deleteRecords(s));
		//response.getWriter().append(jsonResponse);

		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		out.print(jsonResponse);
		out.flush();   

	}

	private void insertRecord(HttpServletRequest r, HttpServletResponse response) throws Exception {
		String area_business,business_code,cust_payment_terms,doc_id,document_type,invoice_currency,aging_bucket;
		Date baseline_create_date,clear_date,document_create_date,document_create_date_1,due_in_date,posting_date;
		int business_year,cust_number,invoice_id,isOpen,posting_id,is_deleted;
		double total_open_amount;
		//System.out.println(r);
		area_business=r.getParameter("area_business");
		baseline_create_date=Date.valueOf(r.getParameter("baseline_create_date"));
		business_year=Integer.parseInt(r.getParameter("business_year"));
		business_code=r.getParameter("business_code");
		clear_date=Date.valueOf(r.getParameter("clear_date"));
		cust_number=Integer.parseInt(r.getParameter("cust_number"));
		cust_payment_terms=r.getParameter("cust_payment_terms");
		doc_id=r.getParameter("doc_id");
		document_create_date=Date.valueOf(r.getParameter("document_create_date"));
		document_create_date_1=Date.valueOf(r.getParameter("document_create_date"));
		document_type=r.getParameter("document_type");
		due_in_date=Date.valueOf(r.getParameter("due_in_date"));
		invoice_currency=r.getParameter("invoice_currency");
		invoice_id=Integer.parseInt(r.getParameter("invoice_id"));
		isOpen=0;
		posting_date=Date.valueOf(r.getParameter("posting_date"));
		posting_id=Integer.parseInt(r.getParameter("posting_id"));
		total_open_amount=Double.parseDouble(r.getParameter("total_open_amount"));
		is_deleted=0;
		aging_bucket="";

		JDBC record=new JDBC(area_business, business_code, cust_payment_terms, doc_id,
				document_type, invoice_currency, baseline_create_date, clear_date,
				document_create_date, document_create_date_1, due_in_date, posting_date, 
				business_year, cust_number, invoice_id, isOpen, posting_id,total_open_amount,is_deleted,aging_bucket);
		Gson gson=new Gson();

		String recordJSON=gson.toJson(record);

		System.out.println(recordJSON);

		String jsonResponse = gson.toJson(jdbc_DAO.addRecords(record));
		//response.getWriter().append(jsonResponse);

		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		out.print(jsonResponse);
		out.flush();   

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

	//TODO Records Functions
	private void updateRecord(HttpServletRequest r, HttpServletResponse response) throws Exception {
		String area_business,business_code,cust_payment_terms,doc_id,document_type,invoice_currency,aging_bucket;
		Date baseline_create_date,clear_date,document_create_date,document_create_date_1,due_in_date,posting_date;
		int business_year,cust_number,invoice_id,isOpen,posting_id,is_deleted;
		double total_open_amount;
		//System.out.println(r);
		int sl_no=Integer.parseInt(r.getParameter("id"));
		area_business=r.getParameter("area_business");
		baseline_create_date=null;
		business_year=Integer.parseInt(r.getParameter("business_year"));
		business_code=r.getParameter("business_code");
		clear_date=null;
		cust_number=Integer.parseInt(r.getParameter("cust_number"));
		cust_payment_terms=r.getParameter("cust_payment_terms");
		doc_id=r.getParameter("doc_id");
		document_create_date=null;
		document_create_date_1=null;
		document_type=r.getParameter("document_type");
		due_in_date=null;
		invoice_currency=r.getParameter("invoice_currency");
		invoice_id=Integer.parseInt(r.getParameter("invoice_id"));
		isOpen=0;
		posting_date=null;
		posting_id=Integer.parseInt(r.getParameter("posting_id"));
		total_open_amount=Double.parseDouble(r.getParameter("total_open_amount"));
		is_deleted=0;
		aging_bucket="";
		JDBC record=new JDBC(area_business, business_code, cust_payment_terms, doc_id,
				document_type, invoice_currency, baseline_create_date, clear_date,
				document_create_date, document_create_date_1, due_in_date, posting_date, sl_no,
				business_year, cust_number, invoice_id, isOpen, posting_id,total_open_amount,is_deleted,aging_bucket);
		Gson gson=new Gson();
		String recordJSON=gson.toJson(record);
		System.out.println(recordJSON);
		String jsonResponse = gson.toJson(jdbc_DAO.updateRecords(record));
		//response.getWriter().append(jsonResponse);
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		out.print(jsonResponse);
		out.flush(); 	
	}
	private void allRecords(HttpServletRequest request, HttpServletResponse response) throws Exception
	{
		List<JDBC> allRecords=jdbc_DAO.selectAllRecords();
		//		request.setAttribute("AllRecords", allRecords);
		//		RequestDispatcher dispatcher=request.getRequestDispatcher("Records.jsp");
		//		try {
		//			dispatcher.forward(request, response);
		//		} catch (Exception e) {
		//			// TODO Auto-generated catch block
		//			e.printStackTrace();
		//		}

		
		Gson gson=new Gson();
		String recordJSON=gson.toJson(allRecords);
		PrintWriter printWriter=response.getWriter();
		response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		printWriter.write(recordJSON);
		printWriter.close();
		
	}
}