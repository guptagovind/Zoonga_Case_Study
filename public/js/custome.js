var Ticket = React.createComponent(){
		render:function(){
			return 
			(
			<div class="col-md-4">
			<div class="ticket-img">
                		<img src="http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif" alt="">
                		<span class="ticket-price">INR 50 - 2,500</span>
              	 	</div>
			<div class="ticket-info">
                		<span class="time-info">SAT, FEB 10, 2018 20:00 Onward</span>
                		<h3 class="ticket-title">JamshedpurFC - ISL Season 4</h3>
                		<p class="venue-info">JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur</p>
              		</div>
			<a class="btn btn-default btn-xs ical" href="#"><i class="fa fa-calendar"></i> &nbsp;iCal</a>
			<a class="btn btn-default btn-xs ml-10" href="#"><i class="fa fa-calendar"></i> &nbsp;Google</a>
			</div>
			)

		}

	};

var path=[];
var imageTitle=[];

var Categories= React.createComponent{

				render:function(){
				return(
				<div class="cat-txt">
              				<h3>{imageTitle[this.props.key]}</h3>
           			</div>
				<div class="col-md-4">
					<img src={path[this.props.key]} alt="" class="img-full-width">	
				</div>)
				}
			}

var BrowseCategories=React.createComponent{
				render:function(){
					return this.path.map(i){
						<Categories key={i}/>						
					}
				}
			}

React.Render(<div><div><Ticket/><Ticket/><Ticket/></div><div><Ticket/><Ticket/><Ticket/></div><div><Ticket/><Ticket/><Ticket/></div><BrowseCategories/></div>,document.getElementById());
React.Render(<div><BrowseCategories/></div>,document.getElementById());


