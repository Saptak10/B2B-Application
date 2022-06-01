package controller;

import java.sql.*;
import java.util.*;
import java.util.Date;

import model.JDBC;

public class JDBC_DAO {
	String jdbcurl="jdbc:mysql://localhost:3306/hrc_db?useSSL=false&allowPublicKeyRetrieval=true&zeroDateTimeBehavior=convertToNull";
	String jdbcname="root";
	String jdbcpassword="sapta20k";
	int nos=0;
	
	private static final String insert_users="INSERT INTO winter_internship"+
			"(area_business,business_code,cust_payment_terms,doc_id,document_type,invoice_currency"
			+ ",baseline_create_date,clear_date,document_create_date,document_create_date1,due_in_date,posting_date"
			+ ",buisness_year,cust_number,invoice_id,isOpen,posting_id"
			+ ",total_open_amount,sl_no) VALUES"+
			"(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	private static final String select_users="select * from winter_internship where sl_no=?";
	private static final String select_all="Select * from winter_internship";
	private static final String delete_users="update winter_internship set is_deleted=? where sl_no=?;";
	private static final String update_users="update winter_internship set cust_payment_terms=?,invoice_currency=? where sl_no=?";
	protected Connection getConn()
	{
		Connection conn=null;
		try
		{
			Class.forName("com.mysql.jdbc.Driver");
			conn=DriverManager.getConnection(jdbcurl,jdbcname,jdbcpassword);
		}
		catch(SQLException|ClassNotFoundException e)
		{
			e.printStackTrace();
		}
		//		catch(ClassNotFoundException e)
		//		{
		//			e.printStackTrace();
		//		}
		return conn;
	}
	
	//insert records
	public HashMap<Object,Object> addRecords(JDBC record)throws Exception
	{
		HashMap<Object,Object> Response = new HashMap<Object,Object>();
		try(Connection conn=getConn();
				PreparedStatement statement=conn.prepareStatement(insert_users);)
		{
			statement.setString(1, record.getArea_business());
			statement.setString(2, record.getBusiness_code());
			statement.setString(3, record.getCust_payment_terms());
			statement.setString(4, record.getDoc_id());
			statement.setString(5, record.getDocument_type());
			statement.setString(6, record.getInvoice_currency());
			statement.setDate(7, (java.sql.Date) record.getBaseline_create_date());
			statement.setDate(8, (java.sql.Date) record.getClear_date());
			statement.setDate(9, (java.sql.Date) record.getDocument_create_date());
			statement.setDate(10, (java.sql.Date) record.getDocument_create_date_1());
			statement.setDate(11, (java.sql.Date) record.getDue_in_date());
			statement.setDate(12, (java.sql.Date) record.getPosting_date());
			statement.setInt(13,record.getBusiness_year());
			statement.setInt(14,record.getCust_number());
			statement.setInt(15, record.getInvoice_id());
			statement.setInt(16,record.getIsOpen());
			statement.setInt(17, record.getPosting_id());
			statement.setDouble(18, record.getTotal_open_amount());
			statement.setInt(19,nos);
			nos++;
			System.out.println(statement);
			if(statement.executeUpdate()>0) {
				Response.put("inserted", true);
			}else {
				Response.put("inserted", false);
			}
		}catch(Exception E) {
			Response.put("inserted", false);
			E.printStackTrace();
		}
		return Response;
	}
	// delete Records
	public HashMap<Object,Object> deleteRecords(int id)throws Exception
	{
		HashMap<Object,Object> Response = new HashMap<Object,Object>();
		try(Connection conn=getConn();
				PreparedStatement statement=conn.prepareStatement(delete_users);)
		{
			statement.setInt(1, 1);
			statement.setInt(2, id);
			
			if(statement.executeUpdate()>0) {
				Response.put("inserted", true);
			}else {
				Response.put("inserted", false);
			}
		}
		catch (Exception e) {
			// TODO: handle exception
		}
		return Response;
	}
	//update Records
	public HashMap<Object,Object> updateRecords(JDBC record)throws Exception
	{
		HashMap<Object,Object> Response = new HashMap<Object,Object>();
		try(Connection conn=getConn();
				PreparedStatement statement=conn.prepareStatement(update_users);)
		{
			statement.setString(1,record.getCust_payment_terms());
			statement.setString(2, record.getInvoice_currency());
			statement.setInt(3, record.getSl_no());
			
			System.out.println(statement);
			if(statement.executeUpdate()>0) {
				Response.put("inserted", true);
			}else {
				Response.put("inserted", false);
			}
			
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		return Response;
	}
	//select records by id
	public JDBC selectRecords(int sl_no)
	{
		JDBC record=null;
		try(Connection conn=getConn();
				PreparedStatement statement=conn.prepareStatement(select_users);)
		{
			statement.setInt(1, sl_no);
			ResultSet r=statement.executeQuery();
			while(r.next())
			{
				String area_business,business_code,cust_payment_terms,doc_id,document_type,invoice_currency,aging_bucket;
				Date baseline_create_date,clear_date,document_create_date,document_create_date_1,due_in_date,posting_date;
				int business_year,cust_number,invoice_id,isOpen,posting_id,is_deleted;
				double total_open_amount;
				area_business=r.getString("area_business");
				baseline_create_date=r.getDate("baseline_create_date");
				business_year=r.getInt("business_year");
				business_code=r.getString("business_code");
				clear_date=r.getDate("clear_date");
				cust_number=r.getInt("cust_number");
				cust_payment_terms=r.getString("cust_payment_terms");
				doc_id=r.getString("doc_id");
				document_create_date=r.getDate("document_create_date");
				document_create_date_1=r.getDate("document_create_date.1");
				document_type=r.getString("document_type");
				due_in_date=r.getDate("due_in_date");
				invoice_currency=r.getString("invoice_currency");
				invoice_id=r.getInt("invoice_id");
				isOpen=r.getInt("isOpen");
				posting_date=r.getDate("posting_date");
				posting_id=r.getInt("posting_id");
				total_open_amount=r.getDouble("total_open_amount");
				is_deleted=r.getInt("is_deleted");
				aging_bucket=r.getString("aging_bucket");
				record=new JDBC(area_business, business_code, cust_payment_terms, doc_id,
						document_type, invoice_currency, baseline_create_date, clear_date,
						document_create_date, document_create_date_1, due_in_date, posting_date, sl_no,
						business_year, cust_number, invoice_id, isOpen, posting_id,total_open_amount,is_deleted,aging_bucket);
			}
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		return record;
	}
	//select all users
	public List<JDBC> selectAllRecords()
	{
		List<JDBC> records=new ArrayList<>();
		try(Connection conn=getConn();
				PreparedStatement statement=conn.prepareStatement(select_all);)
		{
			ResultSet r=statement.executeQuery();
			while(r.next())
			{
				int id=r.getInt("sl_no");
				String area_business,business_code,cust_payment_terms,doc_id,document_type,invoice_currency,aging_bucket;
				Date baseline_create_date,clear_date,document_create_date,document_create_date_1,due_in_date,posting_date;
				int business_year,cust_number,invoice_id,isOpen,posting_id,is_deleted;
				double total_open_amount;
				area_business=r.getString("area_business");
				baseline_create_date=r.getDate("baseline_create_date");
				business_year=r.getInt("buisness_year");
				business_code=r.getString("business_code");
				clear_date=r.getDate("clear_date");
				cust_number=r.getInt("cust_number");
				cust_payment_terms=r.getString("cust_payment_terms");
				doc_id=r.getString("doc_id");
				document_create_date=r.getDate("document_create_date");
				document_create_date_1=r.getDate("document_create_date1");
				document_type=r.getString("document_type");
				due_in_date=r.getDate("due_in_date");
				invoice_currency=r.getString("invoice_currency");
				invoice_id=r.getInt("invoice_id");
				isOpen=r.getInt("isOpen");
				posting_date=r.getDate("posting_date");
				posting_id=r.getInt("posting_id");
				total_open_amount=r.getDouble("total_open_amount");
				is_deleted=r.getInt("is_deleted");
				aging_bucket=r.getString("aging_bucket");
				records.add(new JDBC(area_business, business_code, cust_payment_terms, doc_id,
						document_type, invoice_currency, baseline_create_date, clear_date,
						document_create_date, document_create_date_1, due_in_date, posting_date, id,
						business_year, cust_number, invoice_id, isOpen, posting_id,total_open_amount,is_deleted,aging_bucket));
			}
			nos=records.size();
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		return records;
	}
}