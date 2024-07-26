<template>
  <div>
    <!-- Meta tags -->
    <meta property="og:image" content="https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/325792514_513629890869331_8323829041432717049_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qVaOROpVZo4AX8GEt4A&_nc_ht=scontent-lcy1-1.xx&oh=00_AfDzCO1HdakOY0FrPTheTBNSqrSwktigX9YhsxXbZDODiA&oe=63E0DBD0">
    <meta name="googlebot" content="noindex">
    <meta name="robots" content="noindex">

    <!-- Contact section -->
    <div class="section" id="contact">
      <!-- Contract title -->
      <h1 style="color: #908e8b;font-family: Gruppo, cursive;">Wedding Contract Page</h1>
      <br>
      <!-- Contract 1 form -->
      <div v-if="!codeVerified1 && !codeVerified2">
        <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Enter Code for Contract</h2>
        <input type="text" v-model="inputCode">
        <button @click="verifyCode">Submit</button>
      </div>

      <div v-if="codeVerified1">
        <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Contract 1</h2>
        <br>
        <form @submit.prevent="submitForm('form1')" ref="form1">
          <!-- Client Details -->
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Client Details</h2>
            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Client 1</label>
            <input type="text" v-model="formData.client1" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Client 2</label>
            <input type="text" v-model="formData.client2" required>
          </div>
          <br>
          <!-- Wedding Details -->
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Wedding Details</h2>
            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Chosen Package</label>
            <input type="text" v-model="formData.chosenPackage" readonly>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Date of Wedding</label>
            <input type="date" v-model="formData.dateOfWedding" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Amount of Hours Included</label>
            <input type="number" v-model="formData.hoursIncluded" readonly>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Prep Time</label>
            <input type="text" v-model="formData.prepTime" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Ceremony Time</label>
            <input type="text" v-model="formData.ceremonyTime" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Ending Time</label>
            <input type="text" v-model="formData.endingTime" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Other Times/Arrangements and Services Agreed On</label>
            <textarea style="  width: 50vw;" v-model="formData.otherArrangements"></textarea>
          </div>
          <br>
          <!-- Client Address Details -->
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Client Address Details</h2>
            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Client's Address</label>
            <input type="text" v-model="formData.clientAddress1" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Client 1 - Email Address</label>
            <input type="email" v-model="formData.clientEmail1" required>
            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Client 2 - Email Address</label>
            <input type="email" v-model="formData.clientEmail2">

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Client 1 - Phone Number</label>
            <input type="number" v-model="formData.clientPhone1" required>
            <br>
            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Client 2 - Phone Number</label>
            <input type="number" v-model="formData.clientPhone2">
          </div>
          <br>
          <!-- Prep Details -->
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Prep Details</h2>
            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Prep Start Time</label>
            <input type="text" v-model="formData.prepStartTime" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Prep Address</label>
            <input type="text" v-model="formData.prepAddress1" required>
          </div>
          <br>
          <!-- Ceremony Details -->
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Ceremony Details</h2>
            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Name of Location</label>
            <input type="text" v-model="formData.ceremonyLocation" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Address & Postcode</label>
            <input type="text" v-model="formData.ceremonyAddress1" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Telephone Number</label>
            <input type="number" v-model="formData.ceremonyPhone" required>
          </div>
          <br>
          <!-- Reception Details -->
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Reception Details</h2>
            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Name of Location</label>
            <input type="text" v-model="formData.receptionLocation" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Address & Postcode</label>
            <input type="text" v-model="formData.receptionAddress1" required>
            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Telephone Number</label>
            <input type="number" v-model="formData.receptionPhone" required>
          </div>
          <br>
          <!-- Additional Contacts -->
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Additional Contacts</h2>
            <div v-for="(contact, index) in formData.additionalContacts" :key="index">
              <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Additional Contact {{ index + 1 }} Name</label>
              <input type="text" v-model="contact.name" required>

              <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Additional Contact {{ index + 1 }} Email</label>
              <input type="email" v-model="contact.email" required>

              <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Additional Contact {{ index + 1 }} Telephone</label>
              <input type="number" v-model="contact.phone" required>
            </div>
            <button @click.prevent="addAdditionalContact">Add Additional Contact</button>
          </div>
          <br>
          <br>
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Price Agreed</h2>
            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Booking Fee</label>
            <input type="text" v-model="formData.bookingFee" readonly>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Package fee</label>
            <input type="text" v-model="formData.packageFee" readonly>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Travel fee</label>
            <input type="text" v-model="formData.travelFee" readonly>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Total Cost</label>
            <input type="text" v-model="formData.totalFee" readonly>
          </div>
          <br>
          <br>
          <div style="color: #908e8b;font-family: Gruppo, cursive; font-size: 32px;">
              The booking fee is due on signing this agreement, the booking fee is 25% of the
              total cost of the package chosen of which 20% of said fee is refundable deposit,
              the remaining 80% is a non-refundable booking fee.
              <br>
            <br>
            <h3>Entire Agreement</h3>: This agreement contains the entire understanding
              between the Clients and the Photographer
              <br>
            <br>
            <h3>Confirmation:</h3> A signed “Contract for Wedding Photography Services” and
              payment of the booking fee are necessary to confirm the stated wedding
              services from the Photographer.
              <br><br>
              <h3>Pre-Wedding Consultation:</h3> This normally happens at the time of booking.
              The Clients will outline broadly what is required and the Photographer will advise
              on planning, logistics and timings where needed. If required the Clients are
              welcome to pop in for an additional chat closer to the time of the wedding (about 2
              weeks) to iron out the remaining details. In any case we will contact you by phone
              a few days before the wedding to ensure that there have been no last minute
              changes.
            <br><br>
            <h3>Paparazzi Wedding Guests:</h3>All your guests will have digital cameras and
              all your guests will want to photograph the Clients. In the spirit of cheerful
              cooperation the Clients agree to give the Photographers precedence over the
              guests in order to take the photographs required for the wedding services
              described above. We cannot be held liable for a lack of wedding photos if guests
              taking their own photos of the Clients continually interrupt the Photographer's
              work.
            <br><br>
              <h3>Cooperation:</h3>The Clients and the Photographer consent to happily
              cooperating and communicating with each other to achieve the best possible
              result within the understanding of this contract. We recommend that the
              Photographer be provided with a helper (usually the best man) who will point out
              key individuals to be photographed. The Photographer may also require the
              assistance of the best man in organising family groups. The Clients also agree to
              give the Photographer sufficient warning of key events at the wedding to give the
              Photographer time to prepare e.g. Bouquet throwing, cutting the cake, speeches
              etc. Please note that not all guests at weddings like having their photo taken. In
              such cases the Photographer will use his/her discretion but cannot be held
              responsible for a lack of photos of these people
            <br><br>
            <h3>The Schedule:</h3> Our shooting schedule, style of working and experience are
              designed to achieve a great set of wedding photos for the Clients, accomplished
              with good humour and enjoyed by all concerned. Both the Clients and the
              Photographers therefore agree that punctuality and cheerful cooperation are
              essential to producing outstanding photographic results. In cases where the
              wedding does not run on time (for example, extreme lateness by one of the
              Clients arriving to the church) we cannot guarantee to take our normal set of
              photos although in such circumstances we will do our absolute best to
              compensate.
            <br><br>
                <h3>House Rules:</h3> Note the Photographers are sometimes limited by rules
                imposed by registrars, ministers and venue management as to what can and
                cannot be done. For example some ministers insist that no flash photography is
                allowed, and others will insist that the Photographers shoot from a specific
                location. In such circumstances the Clients agree to accept the technical
                limitations that may be imposed on the equipment used. We advise the Clients to
                make themselves aware of the rules of the venue concerned and if necessary
                negotiate with the personnel concerned.
            <br><br>
            <h3>Copyright Law:</h3> The copyright of photographs remains with the
                Photographer. The Photographer grants the Clients permission to make copies
                of the images under the following conditions. The images taken by the
                Photographer are for personal use by the Clients and their friends and relatives.
                Sale, Publication or any Commercial use of the photographs is not allowed
                without prior written permission from the Photographer.
                Model Release: The Clients grant the Photographer and its legal
                representatives, heirs and assigns, the irrevocable and unlimited consent to use
                the photographs of the Clients for editorial, competition, advertising and any
                other purpose and in any manner, to alter the photographs without restriction;
                and to copyright the images. The Clients hereby release the Photographer and
                its legal representatives, heirs and assigns from all liability and claims in
                connection with the images.
            <br><br>
            <h3>Limit of Liability:</h3> If a photographer is too ill or becomes injured and cannot supply
              the wedding services specified above the Photographer will try to book a
              replacement-wedding photographer. If a second photographer from the
              Photographer is there for the day anyway and this photographer will then shoot
              the day on his/her own. If both photographers are unavailable and a replacement
              photographer cannot be found then liability is limited to a refund of any payments
              received. The Photographers have working methods in place to prevent loss or
              damage to your images. However, there is the unlikely possibility that images may
              be lost, stolen or destroyed for reasons in or beyond our control. In these
              circumstances liability is limited to the return of fees paid for the service or part
              thereof according to the percentage of images supplied.
            <br><br>
            <h3>Booking Fee:</h3> In the event of the Clients cancelling the wedding for whatever
              reason the booking fee is non-refundable. It will be considered as liquidated
              damages to the Photographers.
              We have understood the contents of this contract and agree to the terms
              therein.
            <br>
          </div>
          <!-- Contract Agreement -->
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Contract Agreement</h2>
            <input type="checkbox" id="terms" v-model="formData.agreement" required>
            <label for="terms" style="color: #908e8b;font-family: Gruppo, cursive;">I agree to the terms and conditions.</label>
          </div>

          <!-- Signature -->
          <div class="form-section">
            <h2 style="color: #908e8b; font-family: Gruppo, cursive;">Signature</h2>
            <h3 style="color: #908e8b; font-family: Gruppo, cursive;">Click and draw in the box below</h3>
            <VueSignaturePad style="background-color: white" ref="signaturePad" width="100%" height="300px"></VueSignaturePad>
          </div>


            <!-- Submit Button -->
          <button type="submit">Submit</button>
        </form>
      </div>

      <div v-if="codeVerified2">
        <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Contract 2</h2>
        <form @submit.prevent="submitForm('form2')" ref="form2">
          <!-- Client Details -->
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Client Details</h2>
            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Client 1</label>
            <input type="text" v-model="formData.client1" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Client 2</label>
            <input type="text" v-model="formData.client2" required>
          </div>

          <!-- Wedding Details -->
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Wedding Details</h2>
            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Chosen Package</label>
            <input type="text" v-model="formData.chosenPackage" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Date of Wedding</label>
            <input type="date" v-model="formData.dateOfWedding" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Amount of Hours Included</label>
            <input type="number" v-model="formData.hoursIncluded" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Prep Time</label>
            <input type="time" v-model="formData.prepTime" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Ceremony Time</label>
            <input type="time" v-model="formData.ceremonyTime" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Ending Time</label>
            <input type="time" v-model="formData.endingTime" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Other Times/Arrangements and Services Agreed On</label>
            <textarea style="  width: 50vw;" v-model="formData.otherArrangements"></textarea>
          </div>

          <!-- Client Address Details -->
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Client Address Details</h2>
            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Client's Address</label>
            <input type="text" v-model="formData.clientAddress1" required>
            <input type="text" v-model="formData.clientAddress2">
            <input type="text" v-model="formData.clientAddress3">

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Email Address</label>
            <input type="email" v-model="formData.clientEmail1" required>
            <input type="email" v-model="formData.clientEmail2">

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Phone Numbers</label>
            <input type="tel" v-model="formData.clientPhone1" required>
            <br>
            <input type="tel" v-model="formData.clientPhone2">
          </div>

          <!-- Prep Details -->
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Prep Details</h2>
            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Prep Start Time</label>
            <input type="time" v-model="formData.prepStartTime" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Prep Address</label>
            <input type="text" v-model="formData.prepAddress1" required>
            <input type="text" v-model="formData.prepAddress2">
          </div>

          <!-- Ceremony Details -->
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Ceremony Details</h2>
            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Name of Location</label>
            <input type="text" v-model="formData.ceremonyLocation" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Address & Postcode</label>
            <input type="text" v-model="formData.ceremonyAddress1" required>
            <input type="text" v-model="formData.ceremonyAddress2">

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Telephone Number</label>
            <input type="tel" v-model="formData.ceremonyPhone" required>
          </div>

          <!-- Reception Details -->
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Reception Details</h2>
            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Name of Location</label>
            <input type="text" v-model="formData.receptionLocation" required>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Address & Postcode</label>
            <input type="text" v-model="formData.receptionAddress1" required>
            <input type="text" v-model="formData.receptionAddress2">

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Telephone Number</label>
            <input type="tel" v-model="formData.receptionPhone" required>
          </div>

          <!-- Additional Contacts -->
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Additional Contacts</h2>
            <div v-for="(contact, index) in formData.additionalContacts" :key="index">
              <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Additional Contact {{ index + 1 }} Name</label>
              <input type="text" v-model="contact.name" required>

              <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Additional Contact {{ index + 1 }} Email</label>
              <input type="email" v-model="contact.email" required>

              <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Additional Contact {{ index + 1 }} Telephone</label>
              <input type="tel" v-model="contact.phone" required>
            </div>
            <button @click.prevent="addAdditionalContact">Add Additional Contact</button>
          </div>
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Price Agreed</h2>
            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Booking Fee</label>
            <input type="text" v-model="formData.bookingFee" readonly>

            <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Package fee & Travel fee</label>
            <input type="text" v-model="formData.packageFee" readonly>
          </div>
          <br>
          <br>
          <div style="color: #908e8b;font-family: Gruppo, cursive; font-size: 32px;">
            The booking fee is due on signing this agreement, the booking fee is 25% of the
            total cost of the package chosen of which 20% of said fee is refundable deposit,
            the remaining 80% is a non-refundable booking fee.
            <br>
            <br>
            <h3>Entire Agreement</h3>: This agreement contains the entire understanding
            between the Clients and the Photographer
            <br>
            <br>
            <h3>Confirmation:</h3> A signed “Contract for Wedding Photography Services” and
            payment of the booking fee are necessary to confirm the stated wedding
            services from the Photographer.
            <br><br>
            <h3>Pre-Wedding Consultation:</h3> This normally happens at the time of booking.
            The Clients will outline broadly what is required and the Photographer will advise
            on planning, logistics and timings where needed. If required the Clients are
            welcome to pop in for an additional chat closer to the time of the wedding (about 2
            weeks) to iron out the remaining details. In any case we will contact you by phone
            a few days before the wedding to ensure that there have been no last minute
            changes.
            <br><br>
            <h3>Paparazzi Wedding Guests:</h3>All your guests will have digital cameras and
            all your guests will want to photograph the Clients. In the spirit of cheerful
            cooperation the Clients agree to give the Photographers precedence over the
            guests in order to take the photographs required for the wedding services
            described above. We cannot be held liable for a lack of wedding photos if guests
            taking their own photos of the Clients continually interrupt the Photographer's
            work.
            <br><br>
            <h3>Cooperation:</h3>The Clients and the Photographer consent to happily
            cooperating and communicating with each other to achieve the best possible
            result within the understanding of this contract. We recommend that the
            Photographer be provided with a helper (usually the best man) who will point out
            key individuals to be photographed. The Photographer may also require the
            assistance of the best man in organising family groups. The Clients also agree to
            give the Photographer sufficient warning of key events at the wedding to give the
            Photographer time to prepare e.g. Bouquet throwing, cutting the cake, speeches
            etc. Please note that not all guests at weddings like having their photo taken. In
            such cases the Photographer will use his/her discretion but cannot be held
            responsible for a lack of photos of these people
            <br><br>
            <h3>The Schedule:</h3> Our shooting schedule, style of working and experience are
            designed to achieve a great set of wedding photos for the Clients, accomplished
            with good humour and enjoyed by all concerned. Both the Clients and the
            Photographers therefore agree that punctuality and cheerful cooperation are
            essential to producing outstanding photographic results. In cases where the
            wedding does not run on time (for example, extreme lateness by one of the
            Clients arriving to the church) we cannot guarantee to take our normal set of
            photos although in such circumstances we will do our absolute best to
            compensate.
            <br><br>
            <h3>House Rules:</h3> Note the Photographers are sometimes limited by rules
            imposed by registrars, ministers and venue management as to what can and
            cannot be done. For example some ministers insist that no flash photography is
            allowed, and others will insist that the Photographers shoot from a specific
            location. In such circumstances the Clients agree to accept the technical
            limitations that may be imposed on the equipment used. We advise the Clients to
            make themselves aware of the rules of the venue concerned and if necessary
            negotiate with the personnel concerned.
            <br><br>
            <h3>Copyright Law:</h3> The copyright of photographs remains with the
            Photographer. The Photographer grants the Clients permission to make copies
            of the images under the following conditions. The images taken by the
            Photographer are for personal use by the Clients and their friends and relatives.
            Sale, Publication or any Commercial use of the photographs is not allowed
            without prior written permission from the Photographer.
            Model Release: The Clients grant the Photographer and its legal
            representatives, heirs and assigns, the irrevocable and unlimited consent to use
            the photographs of the Clients for editorial, competition, advertising and any
            other purpose and in any manner, to alter the photographs without restriction;
            and to copyright the images. The Clients hereby release the Photographer and
            its legal representatives, heirs and assigns from all liability and claims in
            connection with the images.
            <br><br>
            <h3>Limit of Liability:</h3> If a photographer is too ill or becomes injured and cannot supply
            the wedding services specified above the Photographer will try to book a
            replacement-wedding photographer. If a second photographer from the
            Photographer is there for the day anyway and this photographer will then shoot
            the day on his/her own. If both photographers are unavailable and a replacement
            photographer cannot be found then liability is limited to a refund of any payments
            received. The Photographers have working methods in place to prevent loss or
            damage to your images. However, there is the unlikely possibility that images may
            be lost, stolen or destroyed for reasons in or beyond our control. In these
            circumstances liability is limited to the return of fees paid for the service or part
            thereof according to the percentage of images supplied.
            <br><br>
            <h3>Booking Fee:</h3> In the event of the Clients cancelling the wedding for whatever
            reason the booking fee is non-refundable. It will be considered as liquidated
            damages to the Photographers.
            We have understood the contents of this contract and agree to the terms
            therein.
            <br>
          </div>
          <!-- Contract Agreement -->
          <div class="form-section">
            <h2 style="color: #908e8b;font-family: Gruppo, cursive;">Contract Agreement</h2>
            <input type="checkbox" id="terms" v-model="formData.agreement" required>
            <label for="terms" style="color: #908e8b;font-family: Gruppo, cursive;">I agree to the terms and conditions.</label>
          </div>
          <div class="form-section">
            <h2 style="color: #908e8b; font-family: Gruppo, cursive;">Signature</h2>

          </div>

          <!-- Submit Button -->
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { VueSignaturePad } from 'vue-signature-pad';
import emailjs from '@emailjs/browser';
import { Dropbox } from 'dropbox';

export default {
  components: {
    VueSignaturePad,
  },
  data() {
    return {
      inputCode: '',
      codeVerified1: false,
      codeVerified2: false,
      formData: {
        client1: '',
        client2: '',
        chosenPackage: 'Blue diamond special offer',
        dateOfWedding: '',
        hoursIncluded: '9',
        prepTime: '',
        ceremonyTime: '',
        endingTime: '',
        otherArrangements: 'photobook',
        clientAddress1: '',
        clientAddress2: '',
        clientAddress3: '',
        clientEmail1: '',
        clientEmail2: '',
        clientPhone1: '',
        clientPhone2: '',
        prepStartTime: '',
        prepAddress1: '',
        prepAddress2: '',
        ceremonyLocation: '',
        ceremonyAddress1: '',
        ceremonyAddress2: '',
        ceremonyPhone: '',
        receptionLocation: '',
        receptionAddress1: '',
        receptionAddress2: '',
        receptionPhone: '',
        bookingFee: '£170',
        packageFee: '£800',
        travelFee: '£90',
        totalFee: '',
        additionalContacts: [],
        agreement: false,
        signatureDataUrl: '', // Placeholder for signature data URL
      },
      correctCode1: 'CODE200726',
      correctCode2: 'CODE456',
      serviceID: 'service_hk3ve7b', // Replace with your EmailJS service ID
      apiKey: 'ed5t0jwfcZmEcYl_4', // Replace with your EmailJS API key
      dropboxAccessToken: 'sl.u.AFFiNDRDRnTtDsK6MLVZmUOvwxK6xs4-m51hWsEZHjjaBEesWLf2PdLl9uYhnVNjS2nFhwW9JV7TG0M91gWk9vv_-nTKSpXAyQ92ggvX6YniWblyt_szT_DoKjeX1txM8tNSuXn_Q0bcD1H4w52H41Wz0NjOMMqyAtQxzQUQ-YkcWC77rT7nzeFdynrXqx-eZ7GbcPdORSnJi7sKDTbDZeMF9F1ZdBpxbV1g08I6SXcscpgglpuS0Unap70Syae83X13zaSTWGUtiuFULTcDIAkcvkf0fuao5tG0w2lfeaT1rRpXnuw-rXp9J6l2ma5kLF1D79MsisDtReglC65UtYNq1yp-fLV5VFl9MVHvu8OZAMznddPQC5QWGKTYByvXkBjFSKa9OCHolXNcaHknOxwZelAl40KgZQbjp501U3DmrYYInJ_-5FS7tTi_8NEaIMM5sRBLvDPJNO9wvOIREYZsOUuGkoXme_3kTXXQDKca7BDFUxzbRnd8-cQ8m1KkExR7osFLLubWtysmJ0Vd_nmgfhXSkTk-pliwzpTIToEYKWOJ7vJPugclJVK7kpM56GOHfcifsMdK3F85v7yElCAsusZPlelS9Jt2dnKIesI4uwPo3yCRaXOjiKQNUKSQYgc80hFYgbbA8rNLZIG80K2priQXG3GflqlMDtj01ljfvzuOSjUCfg_sohX8OrOzDp-rysr89muuLxHAjHy9-xq1J3c1dhxq8aNqxHSJQEziFWpv0o2iAH3d8VX8IGN9dGQ17mXrXLdhprLbgEKi_vDw7D2o1FjRs2K4mi43v_o2O25pUNLVTZEDaT8WvOiKn5Qe4wGXbFD_c2gv62mv8tb9mm4Yde5lcp6AtYoK-suDjaZMVuzcf5fQXcCcTypWZL8qzUNvUphg3DgHBovmrgBsnKrGmKuMlvSP1_3HLeTco5DI6eJL6uJ6eVbdWax4mADM7a8yVpLsFBGUnR2NlntPJDorCGtfB_BTosXLfqdme5hhrAeT9H7aP3UCa5LnrvC3C8AQE2yJ6y2UEHQTBmYYOK00O8_aQZbIEceFmB6__c9F2rRzz6eHcAZP1av47_uy0PLJ3rpWgS9j3xEoOiARxVuSk4zJzvy1tnj02bHyVe4n0ymXfpGZkJvXrpK-6922d_U2ghJO8eMh8wQy4QQursf4tG0nP-4C8PV3ifIcTyUql1h23khEUJ9aOhW_u3BIPSctH5FDCFyUOJDKOEMc2MqNWlCKvXpeg2z2x-oqKUGl0BihjBFC-tPid9bgLAfpnvzggpbGFvZmjP7Vx5sQzcpirWWZY9Nl9f4IEyIHmw', // Replace with your Dropbox Access Token
      signaturePadData: null,
    };
  },
  created() {
    // Automatically calculate total fee when component is created
    this.calculateTotalFee();
  },
  methods: {
    verifyCode() {
      if (this.inputCode === this.correctCode1) {
        this.codeVerified1 = true;
      } else if (this.inputCode === this.correctCode2) {
        this.codeVerified2 = true;
      } else {
        alert('Incorrect Code');
      }
    },
    save() {
      const {isEmpty, data} = this.$refs.signaturePad.saveSignature();

      if (isEmpty) {
        alert('Please provide a signature.');
        return;
      }

      // Example: Upload signature to Dropbox
      this.uploadToDropbox(data)
          .then(() => {
            console.log('Signature uploaded to Dropbox successfully!');
            alert('Signature uploaded to Dropbox successfully!');
          })
          .catch(error => {
            console.error('Error uploading signature to Dropbox:', error);
            alert('Error uploading signature to Dropbox. Please try again.');
          });
    },
    uploadToDropbox(base64String) {
      const dropbox = new Dropbox({accessToken: this.dropboxAccessToken});
      const fileName = `signature_${this.formData.client1.replace(/\s+/g, '-')}_${Date.now()}.png`;
      const fileBlob = this.base64ToBlob(base64String);

      return dropbox.filesUpload({
        path: `/${fileName}`,
        contents: fileBlob,
        mode: 'add',
        autorename: true,
        mute: false,
      }).then(response => response.result)
          .catch(error => {
            console.error('Error uploading to Dropbox:', error);
            throw error;
          });
    },
    base64ToBlob(base64String) {
      const cleanedBase64 = base64String.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
      const byteCharacters = atob(cleanedBase64);
      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      return new Blob([byteArray], {type: 'image/png'});
    },
    calculateTotalFee() {
      // Convert fees to numbers and calculate total fee
      const bookingFee = parseFloat(this.formData.bookingFee.replace('£', ''));
      const packageFee = parseFloat(this.formData.packageFee.replace('£', ''));
      const travelFee = parseFloat(this.formData.travelFee.replace('£', ''));
      const totalFee = bookingFee + packageFee + travelFee;

      // Format total fee as currency
      this.formData.totalFee = `£${totalFee.toFixed(2)}`;
    },
    async submitForm(formRef) {

      // Prepare template parameters based on form data
      const templateParams = {
        client1: this.formData.client1,
        client2: this.formData.client2,
        chosenPackage: this.formData.chosenPackage,
        dateOfWedding: this.formData.dateOfWedding,
        hoursIncluded: this.formData.hoursIncluded,
        prepTime: this.formData.prepTime,
        ceremonyTime: this.formData.ceremonyTime,
        endingTime: this.formData.endingTime,
        otherArrangements: this.formData.otherArrangements,
        clientAddress1: this.formData.clientAddress1,
        clientAddress2: this.formData.clientAddress2,
        clientAddress3: this.formData.clientAddress3,
        clientEmail1: this.formData.clientEmail1,
        clientEmail2: this.formData.clientEmail2,
        clientPhone1: this.formData.clientPhone1,
        clientPhone2: this.formData.clientPhone2,
        prepStartTime: this.formData.prepStartTime,
        prepAddress1: this.formData.prepAddress1,
        prepAddress2: this.formData.prepAddress2,
        ceremonyLocation: this.formData.ceremonyLocation,
        ceremonyAddress1: this.formData.ceremonyAddress1,
        ceremonyAddress2: this.formData.ceremonyAddress2,
        ceremonyPhone: this.formData.ceremonyPhone,
        receptionLocation: this.formData.receptionLocation,
        receptionAddress1: this.formData.receptionAddress1,
        receptionAddress2: this.formData.receptionAddress2,
        receptionPhone: this.formData.receptionPhone,
        additionalContacts: this.formData.additionalContacts,
        bookingFee: this.formData.bookingFee,
        packageFee: this.formData.packageFee,
        travelFee: this.formData.travelFee,
        totalFee: this.formData.totalFee,
        signatureLink: this.base64ToBlob, // Placeholder for signature link
      };

      // Determine which template ID to use based on formRef
      let templateID = '';
      if (formRef === 'form1') {
        templateID = 'template_302r7ka'; // Replace with your template ID for form 1
      } else if (formRef === 'form2') {
        templateID = 'TemplateID2'; // Replace with your template ID for form 2
      }
      const {isEmpty, data} = this.$refs.signaturePad.saveSignature();

      if (isEmpty) {
        alert('Please provide a signature.');
        return;
      }


      // Example: Upload signature to Dropbox
      this.uploadToDropbox(data)
          .then(() => {
            console.log('Signature uploaded to Dropbox successfully!');
            alert('Signature uploaded to Dropbox successfully!');
          })
          .catch(error => {
            console.error('Error uploading signature to Dropbox:', error);
            alert('Error uploading signature to Dropbox. Please try again.');
          });


      // Send email using EmailJS
      const response = await emailjs.send(this.serviceID, templateID, templateParams, this.apiKey);
      console.log('Email sent successfully!', response);
      alert('Form submitted successfully!');
      this.resetForm(); // Reset form after successful submission
    }, catch(error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again later.');
    },
    resetForm() {
      // Reset form logic here (if needed)
      this.formData = {
        client1: '',
        client2: '',
        chosenPackage: '',
        dateOfWedding: '',
        hoursIncluded: '',
        prepTime: '',
        ceremonyTime: '',
        endingTime: '',
        otherArrangements: '',
        clientAddress1: '',
        clientAddress2: '',
        clientAddress3: '',
        clientEmail1: '',
        clientEmail2: '',
        clientPhone1: '',
        clientPhone2: '',
        prepStartTime: '',
        prepAddress1: '',
        prepAddress2: '',
        ceremonyLocation: '',
        ceremonyAddress1: '',
        ceremonyAddress2: '',
        ceremonyPhone: '',
        receptionLocation: '',
        receptionAddress1: '',
        receptionAddress2: '',
        receptionPhone: '',
        bookingFee: '£120',
        packageFee: '£500',
        additionalContacts: [],
        agreement: false,
        signatureDataUrl: '', // Reset signature data URL
      };
    },
    addAdditionalContact() {
      this.formData.additionalContacts.push({
        name: '',
        email: '',
        phone: '',
      });
    },
  },
};
</script>

<style scoped>
input[type=text], [type=email], [type=location],[type=date],[type=time],[type=number], [type=tel], textarea {
  width: 50vw;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
input[type=submit] {
  background-color: #000000;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: aliceblue;
  color: black;
}
button{
  background-color: rgb(219, 194, 178);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: aliceblue;
  color: black;
}
.label{
  color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;
}
.p{
  color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;
}
</style>
