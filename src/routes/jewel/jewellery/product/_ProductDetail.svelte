<script>
  import {getPurityName, getToneName, getToneIdx,getPrice,getTotal, getWeight, getPurityPrice} from '../../../_modules/functions.js'
  export let product = {};
  export let purities = [];
  export let tones = [];
  export let purity_idx = 0;
  export let tone_id = 0;
  export let d_clarity_idx = 0;
  export let clarityPrice = 0;

</script>

<style src="./_ProductDetail.scss"></style>
<h3 class="title">Product Details</h3>
<table>
  <tbody>
    {#if product.p_sku}
      <tr>
        <th>Product Code</th>
        <td>{product.p_sku}</td>
      </tr>
    {/if}
    {#if product.p_height}
      <tr>
        <th>Height</th>
        <td>{product.p_height}&nbsp;mm</td>
      </tr>
    {/if}
    {#if product.p_width}
      <tr>
        <th>Width</th>
        <td>{product.p_width}&nbsp;mm</td>
      </tr>
    {/if}
    {#if product.p_length}
      <tr>
        <th>Depth</th>
        <td>{product.p_length}&nbsp;mm</td>
      </tr>
    {/if}
  </tbody>
</table>
<h3>Diamond DETAILS</h3>
<table>
  <tbody>
    <tr>
      <th>Total Weight</th>
      <td>{product.p_clarity_clarity_id[d_clarity_idx][2]}&nbsp;Ct</td>
    </tr>
    <tr>
      <th>Total No. Of Diamonds</th>
      <td>{product.p_clarity_clarity_id[d_clarity_idx][1]}</td>
    </tr>
    {#if false}
      <tr>
        <th>Clarity</th>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <th>Color</th>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <th>No. Of Diamonds</th>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <th>Shape</th>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <th>Total Weight</th>
        <td>&nbsp;</td>
      </tr>
    {/if}
    {#if product.s_type_name}
      <tr>
        <th>Setting Type</th>
        <td>{product.s_type_name}</td>
      </tr>
    {/if}
  </tbody>
</table>
<h3>METAL DETAILS</h3>
<table>
  <tbody>
    <tr>
      <th>Type</th>
      <td>{getPurityName(purities, product.p_purities_purity_id[purity_idx][0])}</td>
    </tr>
    <tr>
      <th>Tone</th>
      <td>{getToneName(tones, tone_id)}</td>
    </tr>
    <tr>
      <th>Weight(Approx)</th>
      <td>{getWeight(product, purity_idx, tone_id)}&nbsp;gram</td>
    </tr>
  </tbody>
</table>
<h3>PRICE BREAKUP</h3>
<table>
  <tbody>
    <tr>
      <th>Gold</th>
      <td>₹ {getPurityPrice(product, purity_idx, tone_id)}</td>
    </tr>
    <tr>
      <th>Diamond</th>
      <td>₹ {clarityPrice || 0}</td>
    </tr>
    {#if product.p_cs_total_p_cs_total[0][2]}
      <tr>
        <th>Gemstone</th>
        <td>₹ {product.p_cs_total_p_cs_total[0][2] || 0}</td>
      </tr>
    {/if}
    <tr>
      <th>Making Charges</th>
      <td>₹ {product.p_making_charges}</td>
    </tr>
    {#if product.p_discount_per}
      <tr>
        <th>Discount</th>
        <td>- ₹ {(getPrice(product, purity_idx, tone_id, clarityPrice) * product.p_discount_per / 100).toFixed(0)}</td>
      </tr>
    {/if}
    <tr>
      <th>GST</th>
      <td>₹ 0</td>
    </tr>
    <tr>
      <th>Total</th>
      <td>₹ {getPrice(product, purity_idx, tone_id, clarityPrice)}</td>
    </tr>
  </tbody>
</table>
{product.content}
<h3>Tags</h3>
{#if false}  
  {#if product.comment_status}
    <h3>{product.p_rating_count} REVIEWS</h3>
    Rating:{product.p_average_rating} TODO: on review: fix post_review_count and
    average_rating on post
  {/if}
{/if}
